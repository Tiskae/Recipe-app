import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};

export default FiltersScreen;

FiltersScreen.navigationOptions = (navData) => ({
  headerTitle: "Filters",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
