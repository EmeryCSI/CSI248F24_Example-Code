import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  //lets pretend that we need a counter, and increment/dec and a reset function
  //const [counter, setCounter] = useState(fun);
  //lets make a customer book that gives me a counter, inc, dec, reset
  //all of that logic is now in the hook
  const { count, increment, decrement, reset } = useCounter(fun);
  function fun() {
    return 10;
  }
  return (
    <View>
      <Text>{count}</Text>
      <View>
        <Button onPress={increment} title="+"></Button>
        <Button onPress={decrement} title="-"></Button>
        <Button onPress={reset} title="Reset"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
