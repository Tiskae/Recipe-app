import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import colors from "../constants/colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "ios" ? "white" : colors.primaryColor,
  },
  headerTintColor: Platform.OS === "ios" ? colors.primaryColor : "white",
  headerTitleStyle: {},
  animationEnabled: true,
  transitionSpec: {
    open: {
      animation: "spring",
      config: {
        stiffness: 5000,
        damping: 1000,
        mass: 2,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 1,
      },
    },
    close: {
      animation: "spring",
      config: {
        stiffness: 5000,
        damping: 1000,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      },
    },
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: {
      screen: MealDetailScreen,
    },
  },
  {
    mode: "modal",
    initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen },
    MealDetails: { screen: MealDetailScreen },
  },
  {
    mode: "modal",
    initialRouteName: "Favorites",
    defaultNavigationOptions: {
      ...defaultStackNavOptions,
      headerStyle: {
        backgroundColor:
          //   Platform.OS === "android" ? colors.accentColor : "white",
          colors.primaryColor,
      },
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfos) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfos.tintColor}
          />
        );
      },
      tabBarColor: colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfos) => {
        return <Ionicons name="star" size={25} color={tabInfos.tintColor} />;
      },
      tabBarColor: colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        defaultNavigationOptions: {},
        tabBarOptions: {
          activeTintColor: colors.accentColor,
        },
        lazy: true,
      });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const MainNavigator = createDrawerNavigator({
  MealsFav: MealsFavTabNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
