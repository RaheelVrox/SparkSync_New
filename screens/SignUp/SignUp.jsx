import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ApiData from "../../apiconfig";
import { useUserData } from "../../UserDataContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const SignUP = () => {
  const { setUserData } = useUserData();

  const [isLoading, setIsLoading] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (text) => {
    const trimmedEmail = text.trim();
    // Update the state with the trimmed email
    setEmail(trimmedEmail.toLowerCase());
  };
  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      if (!name || !email || !phone_number || !password) {
        Alert.alert("Validation Error", "Please enter all required details");
        setIsLoading(false);
        return;
      }
      if (password.length < 8) {
        Alert.alert("Error", "Password must be at least 8 characters long");
        setIsLoading(false);
        return;
      }
      const apiUrl = `${ApiData.url}/api/v1/user/register/`;
      const requestData = {
        name,
        email,
        phone_number,
        password,
      };

      await axios
        .post(apiUrl, requestData)
        .then(async (response) => {
          // console.log("signup_data:", response.data);
          // console.log("dsadasdas", response.data);
          if (response.data.data === null) {
            Alert.alert("Validation Error", response.data.error);
            setIsLoading(false);
          } else {
            setUserData(response.data.newUser);
            // console.log("store", response.data.newUser);
            setIsLoading(false);
            // Move navigation here after a successful response
            navigation.navigate("OTPVerify");
          }
        })
        .catch((error) => {
          console.log(error);
          const errorMessage =
            error.response?.data?.message ||
            "Unexpected error occurred. Please try again.";
          Alert.alert("Validation Error", errorMessage);
          setIsLoading(false);
          // props.onSignUpSuccess();
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );
    // Clean up listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEnabled={isKeyboardOpen === true ? true : false}
              >
                <>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                      <View style={{ marginHorizontal: 13 }}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("FrontPage")}
                          style={{
                            width: "18%",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Image
                            style={{
                              width: 55,
                              height: 55,
                              resizeMode: "cover",
                              marginBottom: 5,
                            }}
                            source={require("../../assets/BackButton.png")}
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
                            Sign Up
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Roboto-Regular",
                              fontSize: 16,
                              fontWeight: "400",
                              color: "#B6B6B6",
                            }}
                          >
                            It only takes a minute to create your account
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          paddingTop: wp(18),
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <KeyboardAvoidingView
                          behavior={
                            Platform.OS === "ios" ? "padding" : "height"
                          }
                          style={{ flex: 1 }}
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
                            Name
                          </Text>
                          <TextInput
                            placeholder="Your name"
                            style={{
                              ...styles.inputField,
                              fontSize: 16,
                              fontFamily: "Roboto-Regular",
                              fontWeight: "400",
                              color: "#B6B6B6",
                            }}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholderTextColor="#B6B6B6"
                          />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView
                          enabled
                          behavior={
                            Platform.OS === "ios" ? "padding" : "height"
                          }
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
                          behavior={
                            Platform.OS === "ios" ? "padding" : "height"
                          }
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
                            placeholder="+14155550132"
                            style={{
                              ...styles.inputField,
                              fontSize: 16,
                              fontFamily: "Roboto-Regular",
                              fontWeight: "400",
                              color: "#B6B6B6",
                            }}
                            value={phone_number}
                            onChangeText={(text) => setPhoneNumber(text)}
                            placeholderTextColor="#B6B6B6"
                            keyboardType="phone-pad"
                          />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView
                          enabled
                          behavior={
                            Platform.OS === "ios" ? "padding" : "height"
                          }
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
                          <View
                            style={{
                              ...styles.inputField,
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <TextInput
                              secureTextEntry={!showPassword}
                              placeholder="Your password"
                              style={{
                                // ...styles.inputField,
                                width: wp(73),
                                fontSize: 16,
                                fontFamily: "Roboto-Regular",
                                fontWeight: "400",
                                color: "#B6B6B6",
                              }}
                              value={password}
                              onChangeText={(text) =>
                                setPassword(text.replace(/\s/g, ""))
                              }
                              placeholderTextColor="#B6B6B6"
                            />
                            <MaterialCommunityIcons
                              name={showPassword ? "eye" : "eye-off"}
                              size={26}
                              color="#069FF8"
                              onPress={toggleShowPassword}
                            />
                          </View>
                        </KeyboardAvoidingView>
                      </View>
                      {isLoading ? (
                        <View
                          style={{
                            width: wp("88%"),
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            marginTop: 20,
                          }}
                        >
                          <ActivityIndicator size={50} color="#069FF8" />
                        </View>
                      ) : (
                        <>
                          <LinearGradient
                            colors={["#6FCAFF", "#0081CC"]}
                            style={styles.button}
                          >
                            <TouchableOpacity
                              onPress={handleSignUp}
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
                                Create Account
                              </Text>
                            </TouchableOpacity>
                          </LinearGradient>
                        </>
                      )}
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: 30,
                          flexDirection: "row",
                          flex: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 14,
                            fontWeight: "600",
                            color: "#fff",
                          }}
                        >
                          Already have an account?
                        </Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("Login")}
                        >
                          <Text
                            style={{
                              fontFamily: "Roboto-Regular",
                              fontSize: 14,
                              fontWeight: "600",
                              color: "#069FF8",
                            }}
                          >
                            {" "}
                            Log in
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  </TouchableWithoutFeedback>
                </>
              </ScrollView>
            </KeyboardAvoidingView>
          </>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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
    marginBottom: wp(3),
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

export default SignUP;
