import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import EncryptionService from "./services/EncryptionService";

export default function App() {
  let text = "Hello";
  let text2 = "Ifmmp";
  return (
    <View style={styles.container}>
      <Counter />
      <Text>{text}</Text>
      <Text>{EncryptionService.encrypt(text)}</Text>
      <Text>{EncryptionService.decrypt(text2)}</Text>
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
