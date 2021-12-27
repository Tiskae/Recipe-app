import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const selectedMealId = props.navigation.getParam("mealId");
  const displayedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return (
    <View style={styles.screen}>
      <Text>{displayedMeal.title}</Text>
    </View>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
