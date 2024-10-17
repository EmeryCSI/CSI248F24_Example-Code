// Import React library for creating components
import React from "react";

// Import necessary components and functions from react-native
import { FlatList, StyleSheet } from "react-native";

// Import the CATEGORIES data from a local file
import { CATEGORIES } from "../data/dummy-data";

// Import the CategoryItem component to render individual category items
import CategoryItem from "../components/CategoryItem";

// Define the CategoriesScreen component, which receives navigation prop from React Navigation
function CategoriesScreen({ navigation }) {
  // Define a function to render each category item
  const renderCategoryItem = ({ item }) => {
    // Return a CategoryItem component for each item in the data array
    return (
      <CategoryItem
        // Pass the entire category object as a prop
        category={item}
        // Define an onPress handler that navigates to a screen with the item's title
        onPress={() => navigation.navigate(item.title)}
      />
    );
  };

  // Render the main component
  return (
    // Use FlatList for efficient rendering of a large list of items
    <FlatList
      // Provide the data source for the list
      data={CATEGORIES}
      // Specify the function to render each item
      renderItem={renderCategoryItem}
      // Provide a unique key for each item in the list
      keyExtractor={(item) => item.id}
      // Set the number of columns to 2 for a grid layout
      numColumns={2}
      // Apply the container style to the FlatList
      style={styles.container}
    />
  );
}

// Define styles using StyleSheet.create for better performance
const styles = StyleSheet.create({
  // Style for the main container (FlatList)
  container: {
    // Make the container take up all available space
    flex: 1,
  },
});

// Export the CategoriesScreen component as the default export
export default CategoriesScreen;

// Comments:
// 1. We import necessary components and data.
// 2. The CategoriesScreen component renders a grid of category items.
// 3. renderCategoryItem function creates a CategoryItem for each category.
// 4. We use FlatList to efficiently render the grid of categories.
// 5. The numColumns prop is set to 2 to create a two-column grid.
// 6. We apply a simple style to ensure the FlatList takes up the full screen.
