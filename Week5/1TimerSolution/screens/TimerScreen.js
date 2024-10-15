import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function TimerScreen() {
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // Update time logic here
      }, 10); // Update every 10ms for smooth animation
    }
    return () => clearInterval(interval);
  }, [isRunning /* other dependencies */]);
  return (
    <View>
      <Text>TimerScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
