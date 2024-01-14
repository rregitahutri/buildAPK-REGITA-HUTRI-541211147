import React from "react";
import { Text, TouchableOpacity, Alert, StyleSheet, View } from "react-native";

const btnPortofolio = ({ mode, title }) => {
  return (
    <TouchableOpacity
      style={[
        styles.primary,
        mode === "secondary" && styles.secondary,
        mode === "form" && styles.form,
      ]}
    >
      <View>
        <Text
          style={[
            styles.fontPrimary,
            mode === "secondary" && styles.fontSecondary,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#49417E",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginTop: 22,
    alignItems: "center",
    width: "80%",
  },
  secondary: {
    backgroundColor: "transparant",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    width: "80%",
    borderWidth: 1.5,
    borderColor: "#49417E",
  },
  form: {
    width: "90%",
    height: 44,
    backgroundColor: "#49417E", //bae6ff
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 12,
  },
  fontPrimary: { color: "white", fontSize: 16, fontWeight: "bold" },
  fontSecondary: { fontSize: 16, color: "#49417E", fontWeight: "normal" },
});

export default btnPortofolio;
