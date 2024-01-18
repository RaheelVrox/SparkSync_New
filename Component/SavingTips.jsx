import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SavingTips = ({ heading, tips }) => {
  return (
    <>
      <View style={styles.savingcontainer}>
        <Text style={styles.heading}>{heading}</Text>
        <View>
          {tips.map((tip, index) => (
            <View key={index} style={styles.tipContainer}>
              <Entypo name="dot-single" size={24} color="#fff" />
              <Text style={styles.text}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  savingcontainer: {
    borderWidth: 1,
    borderColor: "#607A8C",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    marginBottom: 10,
    color: "#069FF8",
  },
  tipContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  text: {
    marginLeft: 10,
    color: "#B6B6B6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default SavingTips;
