import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiData from "../../apiconfig.js";
import Header from "../../Component/Header";

const VerifyLogin = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [useremail, setUseremail] = useState("");
  const otpInputRefs = [];
  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 3 && value !== "") {
      otpInputRefs[index + 1].focus();
    }
  };
  useEffect(() => {
    const getUserID = async () => {
      const value = await AsyncStorage.getItem("email");
      if (value !== null) {
        setUseremail(value);
      }
    };
    getUserID();
  }, []);
  const handleVerificationError = (errorMessage) => {
    Alert.alert("Validation Error", errorMessage);
  };
  const handleVerifyCode = async () => {
    try {
      const apiUrl = `${ApiData.url}/api/v1/user/verify/`;
      const requestData = {
        otp: otp.join(""),
      };

      await axios
        .post(apiUrl, requestData)
        .then(async (response) => {
          navigation.navigate("BottomTabsNavigator");
        })
        .catch((error) => {
          if (error.response) {
            // console.error("Server responded with error status:", error.response.status);

            if (error.response.data && error.response.data.message) {
              handleVerificationError(error.response.data.message);
            } else {
              handleVerificationError("Invalid OTP: Please try again");
            }
          } else if (error.request) {
            // console.error("No response received:", error.request);
            handleVerificationError("Failed to verify OTP. Please try again.");
          } else {
            // console.error("Request setup error:", error.message);
            handleVerificationError(
              "An unexpected error occurred. Please try again."
            );
          }
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleResendCode = async () => {
    try {
      const apiUrl = `${ApiData.url}/api/v1/user/resend-otp/`;
      const resendRequestData = {
        email: useremail,
      };
      await axios
        .post(apiUrl, resendRequestData)
        .then((response) => {})
        .catch((error) => {
          // console.log(error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              title="Verify Login"
              subTitle="Enter OTP Code sent to your email. The code will expire in 01:30"
            />
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  value={digit}
                  onChangeText={(value) => handleInputChange(index, value)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace" && index > 0) {
                      handleInputChange(index - 1, "");
                      otpInputRefs[index - 1].focus();
                    }
                  }}
                  ref={(ref) => (otpInputRefs[index] = ref)}
                />
              ))}
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 40,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#B6B6B6",
                }}
              >
                Didn’t receive the code?
              </Text>
              <TouchableOpacity onPress={handleResendCode}>
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#069FF8",
                  }}
                >
                  {" "}
                  Resend Code
                </Text>
              </TouchableOpacity>
            </View>
            <>
              <LinearGradient
                colors={["#6FCAFF", "#0081CC"]}
                style={styles.button}
              >
                <TouchableOpacity
                  onPress={handleVerifyCode}
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
                    Continue
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
    flex: 1,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp(13),
  },
  otpInput: {
    width: wp(15.6),
    height: wp(15.6),
    borderWidth: 1.5,
    borderColor: "#607A8C",
    fontSize: wp(6),
    textAlign: "center",
    marginHorizontal: 18,
    borderRadius: 20,
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    backgroundColor: "#04202C",
    elevation: 5,
    shadowColor: "#4A5F71",
  },
  button: {
    width: wp("85%"),
    height: hp("6.5%"),
    borderRadius: 50,
    alignSelf: "center",
    position: "absolute",
    bottom: 80,
  },
});

export default VerifyLogin;
