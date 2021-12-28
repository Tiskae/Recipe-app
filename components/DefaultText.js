import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => (
  <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
);

export default DefaultText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
