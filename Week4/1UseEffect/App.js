import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroToEffect from "./components/IntroToEffect";

export default function App() {
  return (
    <View style={styles.container}>
      <IntroToEffect />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});