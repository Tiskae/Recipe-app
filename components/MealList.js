import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
  const displayedMeals = props.listData;

  const onSelectMealHandler = (id) => {
    props.navigation.navigate({
      routeName: "MealDetails",
      params: {
        mealId: id,
      },
    });
  };

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {
          onSelectMealHandler(itemData.item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
});
