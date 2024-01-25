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
    padding: 15,
    marginHorizontal: 24,
    marginBottom: 20,
    flex: 1,
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    marginBottom: 15,
    color: "#069FF8",
    paddingLeft: 10,
  },
  tipContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  text: {
    marginLeft: 10,
    color: "#B6B6B6",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 25,
  },
});

export default SavingTips;
