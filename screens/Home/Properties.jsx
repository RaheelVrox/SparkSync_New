import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ApiData from "../../apiconfig";
import Header from "../../Component/Header";

const Properties = ({ route }) => {
  const navigation = useNavigation();
  const [user_id, setuser_id] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [propertiesData, setPropertiesData] = useState([]);
  const [showInitialAlert, setShowInitialAlert] = useState(false);

  useEffect(() => {
    if (route?.params?.showAlert) {
      setShowInitialAlert(true);
    }
  }, [route?.params]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const storedUserData = await AsyncStorage.getItem("userData");
        console.log("storedUserData...", storedUserData);
        const userDataFromStorage = JSON.parse(storedUserData) || { id: null };
        if (userDataFromStorage !== null) {
          setuser_id(userDataFromStorage?.id);
          const apiUrl = `${ApiData.url}/api/v1/propertyimage/${userDataFromStorage?.id}`;
          console.log("API URL...:", apiUrl);
          const response = await axios.get(apiUrl);
          console.log("API Response Image...:", response.data);
          const fetchedFrontImages = response.data;
          setPropertiesData(fetchedFrontImages);
        }
      } catch (error) {
        console.error("fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });
    return () => {
      unsubscribe();
    };
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
        <View style={styles.container}>
          <Header
            title="Your Properties"
            subTitle="You can manage your electricity accounts for different properties"
          />
          {isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size={75} color="#069FF8" />
            </View>
          ) : (
            <>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    marginHorizontal: 25,
                    paddingTop: wp(5),
                    // marginBottom: 30,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      fontSize: 20,
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {/* Your properties */}
                  </Text>
                </View>
                {propertiesData?.length !== 0 ? (
                  <>
                    {propertiesData &&
                      propertiesData?.map((el, idx) => {
                        return (
                          <View style={styles.propertieontainer} key={idx}>
                            <View style={{ flexDirection: "row" }}>
                              <View
                                style={{
                                  justifyContent: "center",
                                  marginHorizontal: wp(2),
                                }}
                              >
                                <Text
                                  style={{
                                    justifyContent: "center",
                                    fontFamily: "Roboto-Regular",
                                    fontSize: wp(4),
                                    fontWeight: "600",
                                    color: "#fff",
                                  }}
                                >
                                  Property{idx + 1}:
                                </Text>
                              </View>
                              <View
                                style={{
                                  // width: "60%",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  alignSelf: "center",
                                  justifyContent: "space-evenly",
                                  // gap: wp(2),
                                }}
                              >
                                <Image
                                  style={styles.image}
                                  source={{
                                    uri: `${ApiData.url}/property_image/${el?.frontimage}`,
                                  }}
                                />
                                <Image
                                  style={styles.image}
                                  source={{
                                    uri: `${ApiData.url}/property_image/${el?.back_image}`,
                                  }}
                                />
                              </View>
                            </View>
                          </View>
                        );
                      })}
                  </>
                ) : (
                  <View
                    style={{ justifyContent: "center", alignSelf: "center" }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto-Regular",
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#FFFFFF",
                      }}
                    >
                      No Properties added yet!
                    </Text>
                  </View>
                )}
              </ScrollView>
            </>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Properties;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(13),
    flex: 1,
  },
  propertieontainer: {
    backgroundColor: "#04202C",
    paddingTop: wp(2),
    paddingBottom: wp(2),
    paddingRight: wp(2),
    paddingLeft: wp(2),
    flexDirection: "row",
    marginHorizontal: wp(4),
    height: hp("13%"),
    marginBottom: wp(5),
    borderWidth: 1,
    borderColor: "#4A5F71",
    elevation: 5,
    borderRadius: 20,
  },
  image: {
    resizeMode: "contain",
    width: wp("35%"),
    height: hp("10%"),
    alignItems: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
