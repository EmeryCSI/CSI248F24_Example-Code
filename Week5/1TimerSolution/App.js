import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StopwatchScreen from "./screens/StopwatchScreen";
import TimerScreen from "./screens/TimerScreen";

//Step 1 create a Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // This is the root component for navigation
    <NavigationContainer>
      {/* This navigator creates the bottom tab bar and takes in the screens */}
      <Tab.Navigator>
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
