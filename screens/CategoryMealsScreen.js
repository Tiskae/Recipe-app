import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  FlatList,
} from "react-native";

import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return (
    <View style={styles.screen}>
      <MealList navigation={props.navigation} listData={displayedMeals} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((el) => el.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoryMealsScreen;
