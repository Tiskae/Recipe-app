import { Text, Platform } from "react-native";

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
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
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
    mode: "card",
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
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "open-sans-bold",
              textAlign: "center",
            }}
          >
            Meals
          </Text>
        ) : (
          "Meals"
        ),
      tabBarColor: colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfos) => {
        return <Ionicons name="star" size={25} color={tabInfos.tintColor} />;
      },
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "open-sans-bold",
              textAlign: "center",
            }}
          >
            Favorites
          </Text>
        ) : (
          "Favorites"
        ),
      tabBarColor: colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        sceneAnimationEnabled: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        defaultNavigationOptions: {},
        tabBarOptions: {
          activeTintColor: colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        },
        lazy: true,
      });

const FiltersNavigator = createStackNavigator({
  Filters: { screen: FiltersScreen, navigationOptions: defaultStackNavOptions },
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: "Filters",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
    minSwipeDistance: 1,

    drawerWidth: "70%",
    drawerType: "slide",
    // drawerBackgroundColor:
    //   Platform.OS === "android" ? colors.primaryColor : "white",
    screenContainerStyle: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
  }
);

export default createAppContainer(MainNavigator);
