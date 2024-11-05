import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import {
  PaperProvider,
  MD3LightTheme,
  Surface,
  Text,
  Button,
} from "react-native-paper";
import MyTextInput from "./components/MyTextInput";
import MyCard from "./components/MyCard";
import MyModal from "./components/MyModal";
import ThemeColors from "./components/ThemeColors";
import { useState } from "react";
//setup the theme
//create a theme using the built in MD3Light theme
//can modify to have my own values
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200ee",
    secondary: "#03dac6",
    error: "#B00020",
    background: "#f6f6f6",
  },
  roundness: 3, //border radius
};

export default function App() {
  return (
    //pass the theme as a prop to the provider
    <PaperProvider theme={theme}>
      <AppContent />
    </PaperProvider>
  );
}

function AppContent() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Surface provides a card like contain with a shadow */}
        <Surface style={styles.surface} elevation={4}>
          <Text variant="headlineMedium">React Native Paper Tutorial</Text>
          <Text variant="bodyLarge">A Material Design Component Library</Text>
        </Surface>
        <MyTextInput label={"Name"} />
        <Button mode="contained" onPress={() => console.log("Button Pressed")}>
          Press Me
        </Button>
        <MyCard />
        <Button onPress={() => setModalVisible(true)} mode="outlined">
          Show Modal
        </Button>
        <MyModal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
        >
          <ThemeColors />
        </MyModal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  surface: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
