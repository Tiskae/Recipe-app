import React from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

import colors from "../constants/colors";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => (
    <CategoryGridTile
      title={itemData.item.title}
      pressed={onPressCategoryHandler.bind(null, itemData.item.id)}
      backgroundColor={itemData.item.color}
    />
  );

  const onPressCategoryHandler = (id) => {
    props.navigation.navigate({
      routeName: "CategoryMeals",
      params: { categoryId: id },
    });
  };

  return (
    <View>
      <StatusBar barStyle="default" backgroundColor={colors.primaryColor} />
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => ({
  headerTitle: "Meal Categories",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
