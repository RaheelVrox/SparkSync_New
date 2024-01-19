import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Header from "../../Component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const PhoneRecover = () => {
  const [phone_number, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <ImageBackground
        source={require("../../assets/ImageBackground.png")}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          flex: 1,
          left: 0,
          top: 0,
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Header
            title="Reset Password"
            subTitle="Select verification method and we will send verification code"
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                paddingTop: wp(15),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 16,
                    fontFamily: "Roboto-Regular",
                  }}
                >
                  Phone
                </Text>
                <TextInput
                  placeholder="Your phone number"
                  style={{
                    ...styles.inputField,
                    fontSize: 16,
                    fontFamily: "Roboto-Regular",
                    fontWeight: "400",
                    color: "#B6B6B6",
                  }}
                  value={phone_number}
                  onChangeText={(text) => setPhoneNumber(text)}
                  maxLength={11}
                  placeholderTextColor="#B6B6B6"
                  keyboardType="phone-pad"
                />
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
          <>
            <LinearGradient
              colors={["#6FCAFF", "#0081CC"]}
              style={styles.button}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    fontFamily: "Roboto-Regular",
                    color: "#fff",
                  }}
                >
                  Send OTP
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PhoneRecover;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
    flex: 1,
  },
  inputField: {
    height: hp("7%"),
    width: wp("88%"),
    borderRadius: 50,
    paddingHorizontal: 30,
    backgroundColor: "#04202C",
    fontFamily: "Roboto-Regular",
    borderWidth: 1.5,
    borderColor: "#607A8C",
    elevation: 5,
    marginBottom: wp(4),
    paddingLeft: wp(5),
    shadowColor: "#4A5F71",
    elevation: 10,
  },
  button: {
    width: wp("85%"),
    height: hp("6.5%"),
    borderRadius: 50,
    marginTop: 35,
    alignSelf: "center",
  },
});
