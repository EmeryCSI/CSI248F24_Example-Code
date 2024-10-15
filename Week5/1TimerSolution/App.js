import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TimerScreen from "./screens/TimerScreen";
import StopwatchScreen from "./screens/StopwatchScreen";

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Main App component
export default function App() {
  return (
    // NavigationContainer is the root component for navigation
    <NavigationContainer>
      {/* Tab.Navigator creates the bottom tab bar */}
      <Tab.Navigator
        // screenOptions defines common options for all screens
        screenOptions={({ route }) => ({
          // This function returns the icon for each tab
          tabBarIcon: ({ focused, color, size }) => {
            // Choose the icon based on the route name and whether it's focused
            let iconName = route.name === "Timer" ? "timer" : "stopwatch";
            // Add '-outline' to the icon name if it's not focused
            if (!focused) {
              iconName += "-outline";
            }
            // Return the Ionicons component with the chosen icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Define the Timer screen */}
        <Tab.Screen name="Timer" component={TimerScreen} />
        {/* Define the Stopwatch screen */}
        <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
