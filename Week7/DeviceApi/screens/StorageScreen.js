import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
//AsyncStorage

//super similar to localStorage in the dom
//AsycStorage is a simple, unecrypted, persistent, key value pair system

//All data is tores as strings
//async use async await
//data persists across app restarts

export default function StorageScreen() {
  const [input, setInput] = useState("");
  const [savedText, setSavedText] = useState("");
  return (
    <View>
      <Text>StorageScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
