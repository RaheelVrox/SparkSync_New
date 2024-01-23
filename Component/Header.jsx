import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, subTitle }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <TouchableOpacity
        onPress={goBack}
        style={{
          width: wp("18%"),
          justifyContent: "flex-start",
        }}
      >
        <Image
          style={{
            width: 65,
            resizeMode: "cover",
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
            fontSize: 16,
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

export default Header;

const styles = StyleSheet.create({});
