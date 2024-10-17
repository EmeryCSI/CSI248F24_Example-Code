import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal.steps.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default MealDetailScreen;

// Comments:
// 1. MealDetailScreen displays detailed information about a selected meal.
// 2. We use ScrollView to allow scrolling through potentially long content.
// 3. The meal image is displayed at the top with increased height for better visibility.
// 4. Title and details are styled consistently with white text.
// 5. Ingredients and steps are displayed in separate sections with styled headers.
// 6. Each ingredient and step is displayed in a styled list item.
// 7. We use a listOuterContainer and listContainer to center the content and limit its width.
// 8. Subtitle styling creates a nice separation between sections.
// 9. List items have a contrasting background color for better readability.
