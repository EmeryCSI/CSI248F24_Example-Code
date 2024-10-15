import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const TimerScreen = () => {
  // Single state variable to manage the timer in seconds
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect hook to handle the timer logic
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            Alert.alert("Time is up!");
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Function to handle input changes for hours, minutes, and seconds
  const handleInputChange = (text, unit) => {
    // Convert input text to a number, or use 0 if invalid
    const inputValue = parseInt(text) || 0;

    // Determine the multiplier based on the time unit
    let multiplier;
    if (unit === "hours") {
      multiplier = 3600; // 3600 seconds in an hour
    } else if (unit === "minutes") {
      multiplier = 60; // 60 seconds in a minute
    } else {
      multiplier = 1; // For seconds, no multiplication needed
    }

    // Calculate the new total seconds
    let newSeconds = seconds; // Start with the current total seconds

    // Remove the old value for the given unit
    if (unit === "hours") {
      newSeconds -= Math.floor(seconds / 3600) * 3600;
    } else if (unit === "minutes") {
      newSeconds -= Math.floor((seconds % 3600) / 60) * 60;
    } else {
      newSeconds -= seconds % 60;
    }

    // Add the new value for the given unit
    newSeconds += inputValue * multiplier;

    // Update the state with the new total seconds
    setSeconds(newSeconds);
  };

  // Function to start the timer
  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true);
    } else {
      Alert.alert("Please enter a valid time");
    }
  };

  // Function to stop the timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Function to format seconds into HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={{ marginRight: 5 }}>Hours:</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, width: 50, marginRight: 10 }}
          keyboardType="numeric"
          value={Math.floor(seconds / 3600).toString()}
          onChangeText={(text) => handleInputChange(text, "hours")}
        />
        <Text style={{ marginRight: 5 }}>Minutes:</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, width: 50, marginRight: 10 }}
          keyboardType="numeric"
          value={Math.floor((seconds % 3600) / 60).toString()}
          onChangeText={(text) => handleInputChange(text, "minutes")}
        />
        <Text style={{ marginRight: 5 }}>Seconds:</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, width: 50 }}
          keyboardType="numeric"
          value={(seconds % 60).toString()}
          onChangeText={(text) => handleInputChange(text, "seconds")}
        />
      </View>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        {formatTime(seconds)}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="Start" onPress={startTimer} disabled={isRunning} />
        <Button title="Stop" onPress={stopTimer} disabled={!isRunning} />
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

export default TimerScreen;
