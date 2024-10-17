import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealListItem from "../components/MealListItem";

// MealListScreen component receives route and navigation props from React Navigation
function MealListScreen({ route, navigation }) {
  // Extract categoryId from route params
  const { categoryId } = route.params;
  console.log(categoryId);

  // Filter meals based on the selected category
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  // Function to render individual meal items
  const renderMealItem = ({ item }) => {
    return (
      <MealListItem
        meal={item}
        // When a meal is pressed, navigate to MealDetail screen with mealId
        onPress={() => navigation.navigate("MealDetail", { mealId: item.id })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* FlatList efficiently renders the list of meals */}
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealListScreen;

// Additional comments:
// 1. This screen is typically accessed from a category selection screen.
// 2. The route object contains params passed from the previous screen, including categoryId.
// 3. navigation object is used to define the onPress behavior for each meal item.
// 4. The FlatList optimizes performance by rendering only the visible items.
// 5. Each MealListItem is a custom component that displays meal information.
// 6. The screen uses the MEALS data imported from dummy-data, which should be replaced with real data in a production app.
