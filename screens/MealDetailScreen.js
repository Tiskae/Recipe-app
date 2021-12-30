import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { MEALS } from "../data/dummy-data";

const ListItem = (props) => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
);
const MealDetailScreen = (props) => {
  const selectedMealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing, idx) => (
        <ListItem key={idx}>{ing}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, idx) => (
        <ListItem key={idx}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

MealDetailScreen.navigationOptions = (navigationData) => {
  const selectedId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedId);
  const navTitle = selectedMeal.title;
  return {
    headerTitle: navTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-star"
          onPress={() => console.log("Marked as favorites")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 200,
  },

  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
