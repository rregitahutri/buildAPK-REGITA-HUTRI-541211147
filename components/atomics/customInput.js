import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";

const CustomInput = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      onChangeText={onChangeText} // You should provide an onChangeText function here
      value={Text} // You should provide a value for the input
      style={styles.username}
      placeholder={placeholder}
      placeholderTextColor="#bfc6c9" // Removed unnecessary quotes
    />
  );
};

const styles = StyleSheet.create({
  username: {
    height: 50,
    width: "100%",
    marginVertical: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#e4eff5",
    borderRadius: 14,
    fontSize: 14,
  },
});

export default CustomInput;
