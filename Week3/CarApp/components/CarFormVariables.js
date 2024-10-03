import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

//We need a form a collection of (Text TextInputs)
//we need state variables for each set of Text / Text Input
export default function CarFormVariables() {
  //state variables
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  return (
    <View>
      {/* value is set to the state variable
      onChangeText is set to the function for updating the state */}
      <TextInput
        value={make}
        onChangeText={setMake}
        placeholder="Make"
      ></TextInput>
      <TextInput
        value={model}
        onChangeText={setModel}
        placeholder="Model"
      ></TextInput>
      <TextInput
        value={year}
        onChangeText={setYear}
        placeholder="Year"
      ></TextInput>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({});
