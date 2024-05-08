import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, subTitle }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={{ marginHorizontal: 13 }}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            width: "18%",
            justifyContent: "flex-start",
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              marginBottom: 5,
            }}
            source={require("../assets/BackButton.png")}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 14 }}>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              fontWeight: "600",
              color: "#fff",
              marginBottom: 8,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 15,
              fontWeight: "400",
              color: "#B6B6B6",
            }}
          >
            {subTitle}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
