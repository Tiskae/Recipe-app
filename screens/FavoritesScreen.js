import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <View style={styles.screen}>
      {/* <StatusBar backgroundColor={colors.accentColor} /> */}
      <MealList navigation={props.navigation} listData={favoriteMeals} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

FavoritesScreen.navigationOptions = (navData) => ({
  headerTitle: "Your Favorites",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
