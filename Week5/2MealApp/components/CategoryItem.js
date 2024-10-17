import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

function CategoryItem({ category, onPress }) {
  console.log(category);
  return (
    <TouchableOpacity
      style={[styles.gridItem, { backgroundColor: category.color }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default CategoryItem;

// Comments:
// 1. CategoryItem component represents a single category in the grid.
// 2. We use TouchableOpacity for better touch feedback.
// 3. The item's background color is set dynamically based on the category's color.
// 4. Styling improvements:
//    - Increased margin for better spacing
//    - Added elevation (Android) and shadow (iOS) for a raised effect
//    - Use Platform.OS to handle overflow differently on Android and iOS
//    - Centered the title both horizontally and vertically
// 5. The title text is styled to be bold and white for better visibility.
