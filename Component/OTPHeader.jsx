import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const OTPHeader = ({ title, subTitle }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: wp("18%"),
          justifyContent: "flex-start",
        }}
      >
        <Image
          style={{
            width: wp("18%"),
            height: wp("18%"),
            resizeMode: "contain",
          }}
          source={require("../assets/BackButton.png")}
        />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 19 }}>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 24,
            fontWeight: "600",
            color: "#fff",
            marginBottom: 3,
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
    </>
  );
};

export default OTPHeader;

const styles = StyleSheet.create({});
