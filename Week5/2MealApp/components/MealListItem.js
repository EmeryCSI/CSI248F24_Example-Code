import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

function MealListItem({ meal, onPress }) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          textStyle={styles.detailText}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  detailText: {
    color: "#351401",
  },
});

export default MealListItem;

// Comments:
// 1. MealListItem represents a single meal in the list.
// 2. We use TouchableOpacity for better touch feedback.
// 3. The component displays the meal's image, title, and details.
// 4. Styling improvements:
//    - Added margin for spacing between items
//    - Used borderRadius for rounded corners
//    - Added elevation (Android) and shadow (iOS) for a card-like effect
//    - Centered the title and increased its size
// 5. We pass a custom text style to MealDetails for consistent coloring.
