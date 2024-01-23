import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useUserData } from "../../UserDataContext.js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiData from "../../apiconfig.js";

const Profile = () => {
  const { setUserData } = useUserData();
  const navigation = useNavigation();
  const [userData, setUserDataSt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    setLoading(!loading);
  }, [navigation]);

  const handleSignOut = async () => {
    try {
      setUserData(null);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const fetchUserData = async () => {
    const storedUserData = await AsyncStorage.getItem("userData");
    const userDataFromApi = JSON.parse(storedUserData)?.id;
    const apiUrl = `${ApiData.url}/api/v1/user/details/${userDataFromApi}`;
    await axios
      .get(apiUrl)
      .then((res) => {
        // console.log("res", res);
        let data = res.data || res;
        let image = `${ApiData.url}/profile_image/${data?.profile_image}`;
        setProfileImage(image);
        // console.log("data", data);
        setUserDataSt(data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchUserData();
  }, [navigation]);

  const handleEditProfile = () => {
    navigation.navigate("EditProfile", {
      userId: userData?.id,
      onProfileUpdate: () => fetchUserData(),
    });
  };

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
          {userData?.profile_image ? (
            <>
              <Image
                style={{
                  resizeMode: "contain",
                  marginBottom: 16,
                  alignSelf: "center",
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
                source={{
                  uri: profileImage,
                }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              fontWeight: "600",
              color: "#fff",
              textAlign: "center",
            }}
          >
            {userData?.name || "Loading..."}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                fontWeight: "400",
                color: "#B6B6B6",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 60,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              {userData?.address || "Address not found!"}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.Editbtn}
              onPress={handleEditProfile}
            >
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.text}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://sparksync.pro/contact/")}
            >
              <Text style={styles.text}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://sparksync.pro/terms-condition/")
              }
            >
              <Text style={styles.text}>Terms of Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://sparksync.pro/privacy-policy/")
              }
            >
              <Text style={styles.text}>Privacy Policy</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={handleSignOut}>
              <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(18),
    flex: 1,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  Editbtn: {
    height: 40,
    width: 130,
    borderWidth: 1,
    borderColor: "#607A8C",
    elevation: 5,
    backgroundColor: "#04202C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  detailContainer: {
    marginTop: wp(17),
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
    lineHeight: 50,
    marginHorizontal: wp(8),
  },
  divider: {
    height: 1.5,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 11,
    marginHorizontal: 35,
  },
});
