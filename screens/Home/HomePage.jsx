import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      // Handle the back button press here
      return true; // Prevent default behavior (exit the app)
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, [navigation]);

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
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View style={{ width: "30%" }}>
                <Image
                  style={{
                    resizeMode: "contain",
                    left: 8,
                    top: 70,
                    opacity: 0.3,
                  }}
                  source={require("../../assets/homelogo.png")}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Roboto-Regular",
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  Texas Electricity
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Roboto-Regular",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Areas
                </Text>
              </View>
              <View style={{ width: "30%" }}></View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                alignContent: "center",
                marginTop: -25,
              }}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  width: 298,
                  height: 298,
                }}
                source={require("../../assets/map.png")}
              />
              <Image
                style={{
                  resizeMode: "contain",
                  alignSelf: "flex-start",
                  position: "absolute",
                  right: 0,
                  marginRight: -23,
                }}
                source={require("../../assets/Electricity.png")}
              />
            </View>
            <View style={{ marginHorizontal: 24 }}>
              <Text
                style={{
                  color: "#DEB9A9",
                  textAlign: "center",
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                  fontWeight: "600",
                  lineHeight: 24,
                  marginBottom: 25,
                }}
              >
                <Text
                  style={{
                    color: "#069FF8",
                    fontFamily: "Roboto-Regular",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  85%
                </Text>{" "}
                of Texans live in a deregulated area and can pick their
                electricity provider.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EnergySavingTips")}
                  style={{
                    width: wp("38%"),
                    height: hp("6.5%"),
                    backgroundColor: "#063B58",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#063B58",
                    elevation: 5,
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 13,
                      fontWeight: "800",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Energy
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 13,
                      fontWeight: "800",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Saving Tips
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("FrequentlyQuestion")}
                  style={{
                    width: wp("38%"),
                    height: hp("6.5%"),
                    backgroundColor: "#063B58",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "#063B58",
                    elevation: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 13,
                      fontWeight: "800",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Frequently
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 13,
                      fontWeight: "800",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Asked Questions
                  </Text>
                </TouchableOpacity>
              </>
            </View>
            <View style={styles.divider}></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Properties")}
                style={{
                  width: wp("27.5%"),
                  height: hp("20%"),
                  marginHorizontal: 10,
                  marginVertical: 2,
                  padding: 3,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#063B58",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#063B58",
                }}
              >
                <Image
                  source={require("../../assets/home.png")}
                  style={{
                    resizeMode: "contain",
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Your
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Properties
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("DeregulatedAreas")}
                style={{
                  width: wp("27.5%"),
                  height: hp("20%"),
                  // marginHorizontal: 10,
                  marginVertical: 2,
                  padding: 3,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#063B58",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#063B58",
                }}
              >
                <Image
                  source={require("../../assets/location.png")}
                  style={{
                    resizeMode: "contain",
                    // width: 70,
                    // height: 70,
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Deregulated
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Areas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("AboutTexas")}
                style={{
                  width: wp("27.5%"),
                  height: hp("20%"),
                  marginHorizontal: 10,
                  marginVertical: 2,
                  padding: 3,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#063B58",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#063B58",
                }}
              >
                <Image
                  source={require("../../assets/electrcity.png")}
                  style={{
                    resizeMode: "contain",
                    // width: 70,
                    // height: 70,
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  About Texas
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Electricity
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  divider: {
    height: 1.8,
    backgroundColor: "#1D2A35",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 24,
  },
});
