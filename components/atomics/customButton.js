import React from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const CustomButton = ({
  title,
  onPress,
  size = "default",
  backgroundColor = "#00a2ff",
}) => {
  const buttonStyles = [
    styles.button,
    size === "enabled" && styles.enabledButton,
    backgroundColor && { backgroundColor },
  ];

  const textStyles = [styles.text, size === "enabled" && styles.enabledText];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    backgroundColor: "#00a2ff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 12,
  },
  enabledButton: {
    width: "100%",
    height: 54,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 12,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  enabledText: {
    color: "black",
    fontWeight: "normal",
  },
});

export default CustomButton;
