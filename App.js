import React, { useState } from "react";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

import AppLoading from "expo-app-loading";
import { loadAsync } from "expo-font";

// Improves performance
enableScreens();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () =>
    loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Regular.ttf"),
    });

  let content = (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={() => console.warn("Loading resoucres failed")}
    />
  );

  if (fontsLoaded) {
    content = <MealsNavigator />;
  }

  return content;
}
