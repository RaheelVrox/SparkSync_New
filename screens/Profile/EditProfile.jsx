import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiData from "../../apiconfig";
const EditProfile = ({ route }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [profile_image, setProfileImage] = useState(null);
  const [profile_imageDisplayCheck, setProfileImageDisplayCheck] =
    useState(null);
  const [profile_imageDisplay, setProfileImageDisplay] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isAddressDirty, setIsAddressDirty] = useState(false);
  const [isPhoneDirty, setIsPhoneDirty] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const handleNameChange = (text) => {
    setName(text);
    setIsNameDirty(true);
  };
  const handleaddressChange = (text) => {
    setAddress(text);
    setIsAddressDirty(true);
  };
  const handlePhoneChange = (text) => {
    setPhone(text);
    setIsPhoneDirty(true);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailDirty(true);
    const trimmedEmail = text.trim();
    // Update the state with the trimmed email
    setEmail(trimmedEmail.toLowerCase());
  };
  const inputColor = isNameDirty ? "##B6B6B6" : "#B6B6B6";
  const addressInputColor = isAddressDirty ? "#B6B6B6" : "#B6B6B6";
  const phoneInputColor = isPhoneDirty ? "#B6B6B6" : "#B6B6B6";
  const emailInputColor = isEmailDirty ? "#B6B6B6" : "#B6B6B6";
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const apiUrl = `${ApiData.url}/api/v1/user/update/${userData.id}`;
      const filename = profile_image?.uri.substring(
        profile_image?.uri.lastIndexOf("/") + 1
      );

      let data = new FormData();
      data.append("email", email);
      data.append("address", address);
      data.append("name", name);
      data.append("phone_number", phone_number);
      if (profile_image) {
        data.append("profile_image", {
          uri: profile_image?.uri,
          type: "image/jpeg",
          name: filename,
        });
      }

      const response = await axios.post(apiUrl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedUserData = { ...userData, ...response.data };
      await AsyncStorage.setItem("userData", JSON.stringify(updatedUserData));
      route.params.onProfileUpdate();
      navigation.goBack();
    } catch (error) {
      console.error("Error updating user data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0]);
        setProfileImageDisplay(result.assets[0]?.uri);
      }
    } catch (error) {
      console.error("Error picking an image", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem("userData");
        const userDataFromStorage = JSON.parse(storedUserData) || { id: null };
        // console.log("dsadsasad", userDataFromStorage);
        setUserData(userDataFromStorage);
        setName(userDataFromStorage.name || "");
        setAddress(userDataFromStorage.address || "");
        setPhone(userDataFromStorage.phone_number || "");
        setEmail(userDataFromStorage.email || "");
        setProfileImageDisplayCheck(userDataFromStorage?.profile_image);
        setProfileImageDisplay(
          `${ApiData.url}/profile_image/${userDataFromStorage?.profile_image}` ||
            ""
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

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
            <View>
              <TouchableOpacity
                onPress={pickImage}
                style={{
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                {profile_imageDisplayCheck ? (
                  <Image
                    style={{
                      resizeMode: "contain",
                      marginBottom: 16,
                      alignSelf: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                    source={{ uri: profile_imageDisplay }}
                  />
                ) : (
                  <Image
                    style={{
                      resizeMode: "contain",
                      marginBottom: 16,
                      alignSelf: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                    source={require("../../assets/profile_img.png")}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 17,
                  fontWeight: "700",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Edit Picture
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.textBold}>Name</Text>
                <View>
                  <KeyboardAvoidingView
                    enabled
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Your name"
                      style={{
                        ...styles.inputField,
                        fontSize: 14,
                        fontFamily: "Roboto-Regular",
                        fontWeight: "600",
                        color: inputColor,
                      }}
                      value={name}
                      onChangeText={handleNameChange}
                      placeholderTextColor="#B6B6B6"
                    />
                  </KeyboardAvoidingView>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.textBold}>Address</Text>
                <View>
                  <KeyboardAvoidingView
                    enabled
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      multiline
                      placeholder="Your address"
                      style={{
                        ...styles.inputField,
                        fontSize: 14,
                        fontFamily: "Roboto-Regular",
                        fontWeight: "600",
                        color: addressInputColor,
                        height: hp("7.5%"),
                      }}
                      value={address}
                      onChangeText={handleaddressChange}
                      placeholderTextColor="#B6B6B6"
                    />
                  </KeyboardAvoidingView>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.textBold}>Phone Number</Text>
                <View>
                  <KeyboardAvoidingView
                    enabled
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Phone number"
                      style={{
                        ...styles.inputField,
                        fontSize: 14,
                        fontFamily: "Roboto-Regular",
                        fontWeight: "600",
                        color: phoneInputColor,
                      }}
                      value={phone_number}
                      onChangeText={handlePhoneChange}
                      placeholderTextColor="#B6B6B6"
                    />
                  </KeyboardAvoidingView>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.textBold}>Email</Text>
                <View>
                  <KeyboardAvoidingView
                    enabled
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Your email"
                      multiline
                      style={{
                        ...styles.inputField,
                        fontSize: 14,
                        fontFamily: "Roboto-Regular",
                        fontWeight: "600",
                        color: emailInputColor,
                        height: hp("7.5%"),
                      }}
                      value={email}
                      onChangeText={handleEmailChange}
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoCompleteType="email"
                      placeholderTextColor="#B6B6B6"
                    />
                  </KeyboardAvoidingView>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.Editbutton}
              disabled={loading}
              onPress={() => handleSubmit()}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#069FF8" />
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    fontFamily: "Roboto-Regular",
                    color: "#fff",
                  }}
                >
                  Save
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(18),
    flex: 1,
  },
  detailContainer: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 8,
    marginTop: 17,
  },
  inputField: {
    height: hp("5%"),
    width: wp("50%"),
    borderWidth: 1.5,
    borderColor: "#607A8C",
    borderRadius: 10,
    paddingLeft: wp(4),
    backgroundColor: "#04202C",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#4A5F71",
  },
  textBold: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    fontWeight: "700",
    color: "#fff",
  },
  Editbutton: {
    width: wp("28%"),
    height: hp("6.5%"),
    backgroundColor: "#04202C",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#607A8C",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
  },
});
