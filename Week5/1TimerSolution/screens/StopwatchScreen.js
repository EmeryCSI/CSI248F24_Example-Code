import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function StopwatchScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  //state and effect go inside of the function but before return statement
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        //some kind of elapsed time that we need
        //update the ellapsed time by 10
        setElapsedTime((prevTime) => prevTime + 10);
      }, 10); // Update every 10ms for smooth animation
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  //function that starts the stopwatch
  const startStopWatch = () => {
    setIsRunning(true);
  };
  const stopStopWatch = () => {
    setIsRunning(false);
  };
  const resetStopWatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  const formatTime = (time) => {
    //convert millisecons to minutes, seconds
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 6000) / 1000);
    const milliseconds = Math.floor(time / 10);
    //need to format the hundredth of a millisecond
    return `${minutes}:${seconds}:${milliseconds}`;
  };
  return (
    <View>
      <Text>StopwatchScreen</Text>
      <Text>{formatTime(elapsedTime)}</Text>
      <Button title="Start" onPress={startStopWatch}></Button>
      <Button title="Stop" onPress={stopStopWatch}></Button>
      <Button title="Reset" onPress={resetStopWatch}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
