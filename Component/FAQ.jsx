import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FAQ = ({ text }) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.boxText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    borderWidth: 1,
    borderColor: "#607A8C",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    textAlign: "center",
    backgroundColor: "#04202C",
    marginHorizontal: 24,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
});

export default FAQ;
