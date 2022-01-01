import React, { useState } from "react";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

import AppLoading from "expo-app-loading";
import { loadAsync } from "expo-font";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

// Improves performance
enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () =>
    loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

  let content = (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={() => console.warn("Loading resoucres failed")}
    />
  );

  if (fontsLoaded) {
    content = (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    );
  }

  return content;
}
