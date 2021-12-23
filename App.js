import React from "react";
import { Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [isLoaded, loadingError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  let content = <AppLoading />;

  if (loadingError) {
    // You might want to do something more meaningful
    console.warn("Loading resources failed!");
  }

  if (isLoaded) {
    content = <CategoriesScreen />;
  }

  return <View style={{ flex: 1 }}>{content}</View>;
}
