import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

import MealList from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  // From the redux store
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) =>
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
