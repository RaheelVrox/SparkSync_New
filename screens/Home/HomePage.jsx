import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <ImageBackground
        source={require("../../assets/ImageBackground.png")}
        style={{
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
          <Image
            style={{
              resizeMode: "contain",
              width: wp("30%"),
            }}
            source={require("../../assets/homelogo.png")}
          />
          <Text
            style={{
              color: "#fff",
              position: "absolute",
              textAlign: "center",
              margin: 85,
              paddingLeft: 30,
              fontFamily: "Roboto-Regular",
              fontSize: 20,
              fontWeight: "600",
              paddingHorizontal: 24,
            }}
          >
            Texas Electricity Areas
          </Text>
          <View>
            <Image
              style={{
                resizeMode: "contain",
                alignItems: "center",
                alignSelf: "center",
                marginTop: -35,
                position: "absolute",
                flex: 1,
              }}
              source={require("../../assets/map.png")}
            />
          </View>
          <Image
            style={{
              resizeMode: "contain",
              position: "absolute",
              alignSelf: "flex-end",
              margin: wp(35),
              paddingLeft: wp(28),
            }}
            source={require("../../assets/Electricity.png")}
          />
          <View style={{ paddingTop: wp(70), marginHorizontal: 24 }}>
            <Text
              style={{
                color: "#DEB9A9",
                textAlign: "center",
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 24,
              }}
            >
              <Text
                style={{
                  color: "#069FF8",
                  fontFamily: "Roboto-Regular",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                85%
              </Text>{" "}
              of Texans live in a deregulated area and can pick their
              electricity provider.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: wp(100),
              }}
            >
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EnergySavingTips")}
                  style={{
                    width: wp("36.5%"),
                    height: hp("6.5%"),
                    backgroundColor: "#04202C",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#607A8C",
                    elevation: 5,
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 12,
                      fontWeight: "800",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Energy Saving Tips
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("FrequentlyQuestion")}
                  style={{
                    width: wp("36.5%"),
                    height: hp("6.5%"),
                    backgroundColor: "#04202C",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "#607A8C",
                    elevation: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 12,
                      fontWeight: "800",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Frequently Asked Questions
                  </Text>
                </TouchableOpacity>
              </>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <LinearGradient
              colors={["#04202C", "#04202C"]}
              style={{
                width: "25%",
                height: "55%",
                marginHorizontal: 10,
                marginVertical: 2,
                padding: 3,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: "#607A8C",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Properties")}
              >
                <Image
                  source={require("../../assets/home.png")}
                  style={{
                    resizeMode: "contain",
                    width: 70,
                    height: 70,
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
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
                    fontSize: 14,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Properties
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#04202C", "#04202C"]}
              style={{
                width: "25%",
                height: "55%",
                borderRadius: 20,
                marginHorizontal: 10,
                marginVertical: 2,
                padding: 3,
                borderWidth: 1,
                borderColor: "#607A8C",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("DeregulatedAreas")}
              >
                <Image
                  source={require("../../assets/location.png")}
                  style={{
                    resizeMode: "contain",
                    width: 70,
                    height: 70,
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
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
                    fontSize: 14,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Areas
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#04202C", "#04202C"]}
              style={{
                width: "25%",
                height: "55%",
                borderRadius: 20,
                marginHorizontal: 10,
                marginVertical: 2,
                padding: 3,
                borderWidth: 1,
                borderColor: "#607A8C",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("AboutTexas")}
              >
                <Image
                  source={require("../../assets/electrcity.png")}
                  style={{
                    resizeMode: "contain",
                    width: 70,
                    height: 70,
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
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
                    fontSize: 14,
                    justifyContent: "center",
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontWeight: "800",
                  }}
                >
                  Electricity
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: wp(100),
    paddingTop: 20,
  },
  divider: {
    height: 1.8,
    backgroundColor: "#1D2A35",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 24,
  },
});
