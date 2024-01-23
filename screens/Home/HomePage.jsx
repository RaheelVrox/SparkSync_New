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
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <ScrollView style={{ flex: 1 }}>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  resizeMode: "contain",
                  width: "30%",
                }}
                source={require("../../assets/homelogo.png")}
              />
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
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  alignItems: "center",
                  alignSelf: "center",
                  top: -25,
                }}
                source={require("../../assets/map.png")}
              />
              <Image
                style={{
                  resizeMode: "contain",
                  alignSelf: "flex-start",
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
                  fontSize: 16,
                  fontWeight: "600",
                  lineHeight: 24,
                  marginBottom: 25,
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
                </Text>
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
                    width: wp("37.5%"),
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
                    width: wp("37.5%"),
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
                  width: "26.5%",
                  height: "56.5%",
                  marginHorizontal: 10,
                  marginVertical: 2,
                  padding: 3,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#607A8C",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#04202C",
                }}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("DeregulatedAreas")}
                style={{
                  width: "26.5%",
                  height: "56.5%",
                  // marginHorizontal: 10,
                  marginVertical: 2,
                  padding: 3,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#607A8C",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#04202C",
                }}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("AboutTexas")}
                style={{
                  width: "26.5%",
                  height: "56.5%",
                  marginHorizontal: 10,
                  marginVertical: 2,
                  padding: 3,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "#607A8C",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#04202C",
                }}
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
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
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
