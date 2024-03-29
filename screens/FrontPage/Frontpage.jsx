import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Frontpage = () => {
  const navigation = useNavigation();
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
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View
          style={{
            marginTop: wp(25),
            marginHorizontal: 24,
            flex: 1,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Roboto-Regular",
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
              lineHeight: 32,
              color: "#fff",
            }}
          >
            Wholesale electricity price is yours with Spark Sync. See how our
            advanced algorithm can help you save by uploading your bill now!
          </Text>
        </View>
        <LinearGradient
          colors={["#6FCAFF", "#0081CC"]}
          style={styles.startbutton}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUP")}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "Roboto-Regular",
                color: "#fff",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: wp("50%"),
    height: wp("60%"),
    top: 90,
    resizeMode: "contain",
  },
  startbutton: {
    width: wp("85%"),
    height: hp("6.5%"),
    borderRadius: 50,
    alignSelf: "center",
    margin: 50,
  },
});

export default Frontpage;
