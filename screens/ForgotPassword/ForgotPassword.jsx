import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../Component/Header";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    if (selectedOption === "email") {
      navigation.navigate("EmailRecover");
    } else if (selectedOption === "phone-call") {
      navigation.navigate("PhoneRecover");
    }
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
        }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Header
            title="Reset Password"
            subTitle="Select verification method and we will send verification code "
          />
          <View style={{ flex: 1, paddingTop: wp(15) }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedOption("email");
              }}
              style={styles.containerbox}
            >
              <View style={styles.leftBox}>
                <Feather
                  name="mail"
                  size={22}
                  color={selectedOption === "email" ? "#069FF8" : "#fff"}
                />
              </View>
              <View style={styles.rightText}>
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#B6B6B6",
                  }}
                >
                  Your send to your email
                </Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                setSelectedOption("phone-call");
              }}
              style={styles.containerbox}
            >
              <View style={styles.leftBox}>
                <Feather
                  name="phone-call"
                  size={22}
                  color={selectedOption === "phone-call" ? "#069FF8" : "#fff"}
                />
              </View>
              <View style={styles.rightText}>
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Phone number
                </Text>
                <Text
                  style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#B6B6B6",
                  }}
                >
                  Send to your phone number
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
          <LinearGradient colors={["#6FCAFF", "#0081CC"]} style={styles.button}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleContinue}
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
    flex: 1,
  },
  containerbox: {
    backgroundColor: "#04202C",
    paddingTop: 18,
    paddingBottom: 18,
    paddingRight: 18,
    paddingLeft: 18,
    flexDirection: "row",
    marginHorizontal: 24,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1.5,
    borderColor: "#607A8C",
    elevation: 5,
    shadowColor: "#4A5F71",
  },
  leftBox: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#04202C",
    borderWidth: 1,
    borderColor: "#607A8C",
    elevation: 5,
  },
  rightText: {
    marginLeft: 20,
    justifyContent: "center",
    alignSelf: "center",
    gap: 4,
  },
  button: {
    width: wp("85%"),
    height: hp("6.5%"),
    borderRadius: 50,
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
  },
});
