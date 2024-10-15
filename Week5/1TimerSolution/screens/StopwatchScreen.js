import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const StopwatchScreen = () => {
  // State variables to track stopwatch status and elapsed time
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // useEffect hook to handle the stopwatch timer
  useEffect(() => {
    let interval;

    // If the stopwatch is running, create an interval to update the time
    if (isRunning) {
      interval = setInterval(() => {
        // Update the elapsed time every 10 milliseconds
        setElapsedTime((prevTime) => prevTime + 10);
      }, 10);
    }

    // Cleanup function to clear the interval when the component unmounts or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]); // This effect runs whenever isRunning changes

  // Function to start the stopwatch
  const startStopwatch = () => {
    setIsRunning(true);
  };

  // Function to stop the stopwatch
  const stopStopwatch = () => {
    setIsRunning(false);
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  // Function to format the elapsed time into minutes:seconds:milliseconds
  const formatTime = (time) => {
    // Convert milliseconds to minutes, seconds, and remaining milliseconds
    const minutes = Math.floor(time / 60000); // 60000 ms in a minute
    const seconds = Math.floor((time % 60000) / 1000); // 1000 ms in a second
    const milliseconds = Math.floor((time % 1000) / 10); // Only show 2 digits

    // Create formatted strings, adding leading zeros if needed
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMilliseconds = milliseconds.toString().padStart(2, "0");

    // Combine the formatted strings
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  // Render the stopwatch UI
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Display the formatted elapsed time */}
      <Text style={{ fontSize: 48, marginBottom: 20 }}>
        {formatTime(elapsedTime)}
      </Text>

      {/* Buttons for controlling the stopwatch */}
      <View style={{ flexDirection: "row" }}>
        <Button title="Start" onPress={startStopwatch} />
        <Button title="Stop" onPress={stopStopwatch} />
        <Button title="Reset" onPress={resetStopwatch} />
      </View>
    </View>
  );
};

export default StopwatchScreen;
