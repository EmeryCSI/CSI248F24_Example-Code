import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function TimerScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        //we are expecting seconds to have a value
        //we are starting a time and counting down
        setSecondsRemaining((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            console.log("Timer up");
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000); // seconds
    }
    return () => clearInterval(interval);
  }, [isRunning /* other dependencies */]);
  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setIsRunning(false);
    setSecondsRemaining(0);
  };
  //function to handle any changes for these input
  const handleInputChange = (text, unit) => {
    console.log(unit);
    console.log(text);
    //text is what they typed, unit will be either hours, min, or seconds
    const inputValue = parseInt(text) || 0;
    //we need to figure out what kind of unit we got here
    let multiplier = 1;
    if (unit === "hours") {
      multiplier = 60 * 60;
    } else if (unit === "minutes") {
      multiplier = 60;
    }
    //get the current value of secondsRemaining
    let newSecondsRemaining = secondsRemaining;
    //subtract out the current value of hours/minutes/seconds
    if (unit === "hours") {
      newSecondsRemaining -= Math.floor(secondsRemaining / 3600) * 3600;
    } else if (unit === "minutes") {
      newSecondsRemaining -= Math.floor((secondsRemaining % 3600) / 60) * 60;
    } else {
      newSecondsRemaining -= secondsRemaining % 60;
    }
    //calculate the new value
    newSecondsRemaining += inputValue * multiplier;
    setSecondsRemaining(newSecondsRemaining);
  };
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <View>
      <Text>TimerScreen</Text>
      <View>
        <Text>Hours</Text>
        <TextInput
          onChangeText={(text) => handleInputChange(text, "hours")}
        ></TextInput>
        <Text>Minutes</Text>
        <TextInput
          onChangeText={(text) => handleInputChange(text, "minutes")}
        ></TextInput>
        <Text>Seconds</Text>
        <TextInput
          onChangeText={(text) => handleInputChange(text, "seconds")}
        ></TextInput>
      </View>
      <Text>{formatTime(secondsRemaining)}</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Stop Timer" onPress={stopTimer} />
      <Button title="Reset Timer" onPress={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({});
