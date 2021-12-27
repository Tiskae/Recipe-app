import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp activeOpacity={0.7} onPress={props.pressed}>
        <View
          style={{
            ...styles.container,
            backgroundColor: props.backgroundColor,
          }}
        >
          <Text numberOfLines={2} style={styles.gridItemText}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  container: {
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    width: "100%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  gridItemText: {
    color: "black",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});
