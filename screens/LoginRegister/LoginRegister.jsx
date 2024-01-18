import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginRegister = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/ImageBackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
          <TouchableOpacity>
            <LinearGradient
              colors={["#04202C", "#04202C"]}
              start={{ x: 0, y: 0.3 }}
              end={{ x: 0.6, y: 0.3 }}
              style={styles.continuebox}
            >
              <AntDesign name="apple1" size={30} color="#fff" />
              <Text style={styles.text}>Continue with Apple</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["#04202C", "#04202C"]}
              start={{ x: 0, y: 0.3 }}
              end={{ x: 0.6, y: 0.3 }}
              style={styles.continuebox}
            >
              <AntDesign name="google" size={30} color="#fff" />
              <Text style={styles.text}>Continue with Google</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <LinearGradient
              colors={["#04202C", "#04202C"]}
              start={{ x: 0, y: 0.3 }}
              end={{ x: 0.6, y: 0.3 }}
              style={styles.continuebox}
            >
              <MaterialCommunityIcons name="email" size={30} color="#fff" />
              <Text style={styles.text}>Continue with Email</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                fontWeight: "400",
                color: "#B6B6B6",
              }}
            >
              Already have an account?
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#069FF8",
                }}
              >
                {" "}
                Log in
              </Text>
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              position: "absolute",
              bottom: 30,
              alignSelf: "center",
              marginHorizontal: 24,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Regular",
                fontSize: 14,
                fontWeight: "400",
                color: "#B6B6B6",
              }}
            >
              By continuing, you accept the{" "}
              <Text
                style={{ color: "#069FF8", textDecorationLine: "underline" }}
              >
                Term of Use
              </Text>{" "}
              and{" "}
              <Text
                style={{ color: "#069FF8", textDecorationLine: "underline" }}
              >
                Privacy Policy
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: wp(30),
  },
  image: {
    width: wp("50%"),
    height: wp("60%"),
    resizeMode: "contain",
    marginBottom: 40,
  },
  continuebox: {
    width: wp("80%"),
    height: hp("7%"),
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    shadowColor: "#000D17",
    elevation: 5,
    marginBottom: 25,
    borderColor: "#04202C",
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#8297a8",
  },
  text: {
    marginLeft: 35,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
