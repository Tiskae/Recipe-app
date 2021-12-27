import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};

export default FiltersScreen;

FiltersScreen.navigationOptions = {
  headerTitle: "Filter Meals",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
