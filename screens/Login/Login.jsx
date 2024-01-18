import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import Header from "../../Component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import ApiData from "../../apiconfig";
import { useUserData } from "../../UserDataContext";

const Login = () => {
  const { setUserData } = useUserData();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (text) => {
    const trimmedEmail = text.trim();
    setEmail(trimmedEmail.toLowerCase());
  };

  const handleVerificationError = (errorMessage) => {
    Alert.alert("Error", errorMessage);
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      if (!email) {
        handleVerificationError("Please enter your email.");
        setIsLoading(false);
        return;
      }

      if (!password) {
        handleVerificationError("Please enter your password.");
        setIsLoading(false);
        return;
      }

      const apiUrl = `${ApiData.url}/api/v1/user/login/`;
      const requestData = {
        email,
        password,
      };

      await axios
        .post(apiUrl, requestData)
        .then((res) => {
          console.log("Hello")
          setUserData(res.data.user);
          navigation.navigate("VerifyLogin");
        })
        .catch((error) => {
          console.log(error);
          handleVerificationError(
            "Invalid email or password. Please try again"
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
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
              title="Welcome Back"
              subTitle="Enter your email address and password"
            />
            <>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                      Email
                    </Text>
                    <TextInput
                      placeholder="Your email address"
                      style={{
                        ...styles.inputField,
                        fontSize: 16,
                        fontFamily: "Roboto-Regular",
                        fontWeight: "400",
                        color: "#B6B6B6",
                      }}
                      value={email}
                      onChangeText={handleEmailChange}
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoCompleteType="email"
                      placeholderTextColor="#B6B6B6"
                    />
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
                      Password
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
                        value={password}
                        onChangeText={(text) =>
                          setPassword(text.replace(/\s/g, ""))
                        }
                        placeholder="Your password"
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
              </TouchableWithoutFeedback>
            </>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                marginHorizontal: 27,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    color: "#069FF8",
                    fontWeight: "600",
                    fontSize: 14,
                    fontFamily: "Roboto-Regular",
                  }}
                >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
            <>
              {isLoading ? (
                <ActivityIndicator
                  size={50}
                  color="#069FF8"
                  style={{
                    position: "absolute",
                    bottom: 80,
                    alignSelf: "center",
                  }}
                />
              ) : (
                <LinearGradient
                  colors={["#6FCAFF", "#0081CC"]}
                  style={styles.button}
                >
                  <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: isLoading ? 0 : 1,
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
                      Login
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              )}
            </>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                flex: 1,
                position: "absolute",
                alignSelf: "center",
                bottom: 45,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#B6B6B6",
                }}
              >
                Don’t have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUP")}>
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#069FF8",
                  }}
                >
                  {" "}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

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
    borderWidth: 1,
    borderColor: "#4A5F71",
    elevation: 5,
    marginBottom: wp(4),
    paddingLeft: wp(5),
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
