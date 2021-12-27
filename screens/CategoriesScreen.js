import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";

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

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
