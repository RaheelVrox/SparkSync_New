import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import Header from "../../Component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiData from "../../apiconfig";
import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userdata, setUserdata] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleVerificationError = (errorMessage) => {
    Alert.alert("Error", errorMessage);
  };

  useEffect(() => {
    const getUserID = async () => {
      const email = await AsyncStorage.getItem("email");

      if (email !== null) {
        setUserdata(email);
        console.log("User email:", email);
      }
    };
    getUserID();
  }, []);

  useEffect(() => {
    const getUserID = async () => {
      const phone = await AsyncStorage.getItem("phone_number");

      if (phone !== null) {
        setUserdata(phone);
        console.log("User phone_number:", phone);
      }
    };
    getUserID();
  }, []);

  const handlePasswordUpdate = async () => {
    try {
      setLoading(true);

      if (!newPassword) {
        handleVerificationError("Please enter your new password.");
        setLoading(false);
        return;
      }
      if (!confirmPassword) {
        handleVerificationError("Please enter your confirm password.");
        setLoading(false);
        return;
      }
      if (newPassword !== confirmPassword) {
        handleVerificationError("Passwords do not match. Please try again.");
        setLoading(false);
        return;
      }
      if (newPassword.length < 8) {
        handleVerificationError("Password must be at least 8 characters long");
        setLoading(false);
        return;
      }
      console.log(userdata);

      const apiUrl = `${ApiData.url}/api/v1/user/reset-password/`;
      const requestData = {
        email: userdata,
        phone_number: userdata,
        newPassword,
        confirmPassword,
      };

      await axios
        .post(apiUrl, requestData)
        .then((response) => {
          navigation.navigate("Login");
        })
        .catch((error) => {
          console.log(error);
          handleVerificationError("Please try again");
        });

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
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
            <Header title="Reset Password" subTitle="Enter your new password" />
            <View
              style={{
                paddingTop: wp(9),
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
                  New Password
                </Text>
                <View>
                  <TextInput
                    secureTextEntry={!showPassword}
                    style={{
                      ...styles.inputField,
                      fontSize: 16,
                      fontFamily: "Roboto-Regular",
                      fontWeight: "400",
                      color: "#B6B6B6",
                    }}
                    value={newPassword}
                    onChangeText={(text) =>
                      setNewPassword(text.replace(/\s/g, ""))
                    }
                    placeholder="Enter new password"
                    placeholderTextColor="#B6B6B6"
                  />
                  <MaterialCommunityIcons
                    name={showPassword ? "eye" : "eye-off"}
                    size={26}
                    color="#069FF8"
                    style={{
                      position: "absolute",
                      alignSelf: "flex-end",
                      padding: 18,
                    }}
                    onPress={toggleShowPassword}
                  />
                </View>
              </KeyboardAvoidingView>
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
                  Enter Again
                </Text>
                <View>
                  <TextInput
                    secureTextEntry={!showPassword}
                    style={{
                      ...styles.inputField,
                      fontSize: 16,
                      fontFamily: "Roboto-Regular",
                      fontWeight: "400",
                      color: "#B6B6B6",
                    }}
                    value={confirmPassword}
                    onChangeText={(text) =>
                      setConfirmPassword(text.replace(/\s/g, ""))
                    }
                    placeholder="Enter confirm password"
                    placeholderTextColor="#B6B6B6"
                  />
                  <MaterialCommunityIcons
                    name={showPassword ? "eye" : "eye-off"}
                    size={26}
                    color="#069FF8"
                    style={{
                      position: "absolute",
                      alignSelf: "flex-end",
                      padding: 18,
                    }}
                    onPress={toggleShowPassword}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
            {loading ? (
              <ActivityIndicator
                size={50}
                color="#069FF8"
                style={{
                  position: "absolute",
                  bottom: 35,
                  alignSelf: "center",
                }}
              />
            ) : (
              <TouchableOpacity
                onPress={handlePasswordUpdate}
                style={styles.button}
              >
                <LinearGradient
                  colors={["#6FCAFF", "#0081CC"]}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
    alignSelf: "center",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 35,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
});
