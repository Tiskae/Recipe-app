import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MealList from "../components/MealList";
import colors from "../constants/colors";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const displayedMeals = MEALS.filter((meal) => ["m1", "m2"].includes(meal.id));

  return (
    <View style={styles.screen}>
      {/* <StatusBar backgroundColor={colors.accentColor} /> */}
      <MealList navigation={props.navigation} listData={displayedMeals} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};
