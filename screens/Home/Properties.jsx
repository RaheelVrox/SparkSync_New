import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Platform,
  ImageBackground,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Modal from "react-native-modal";
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
          const apiUrl = `${ApiData.url}/api/v1/frontimage/${userDataFromStorage?.id}`;
          const response = await axios.get(apiUrl);
          const fetchedFrontImages = response.data;
          setPropertiesData(fetchedFrontImages?.properties);
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

  const hideInitialAlert = () => {
    setShowInitialAlert(false);
  };

  return (
    <ImageBackground
      source={require("../../assets/ImageBackground.png")}
      style={{
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
                                  color: "#122359",
                                }}
                              >
                                Property{idx + 1}:
                              </Text>
                            </View>
                            <View
                              style={{
                                width: "60%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                marginLeft: wp(6),
                                gap: wp(5),
                              }}
                            >
                              <Image
                                style={styles.image}
                                source={{
                                  uri: `${ApiData.url}/front_image/${el?.front_image_url}`,
                                }}
                              />
                              <Image
                                style={styles.image}
                                source={{
                                  uri: `${ApiData.url}/back_image/${el?.back_image_url}`,
                                }}
                              />
                            </View>
                          </View>
                        </View>
                      );
                    })}
                </>
              ) : (
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
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

        {/* Custom modal for initial alert */}
        <Modal isVisible={showInitialAlert} onBackdropPress={hideInitialAlert}>
          <LinearGradient
            colors={["#607A8C", "#607A8C"]}
            style={{
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Roboto-Regular",
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 10,
              }}
            >
              Thank You!
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Roboto-Regular",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
              }}
            >
              Your bill has been submitted successfully. Our sales
              representative will contact you soon.
            </Text>
            <TouchableOpacity
              onPress={hideInitialAlert}
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{ color: "#069FF8", fontSize: 18, fontWeight: "400" }}
              >
                OK
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default Properties;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
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
    borderRadius: wp(2),
    height: hp("13%"),
    marginBottom: wp(5),
    borderWidth: 1,
    borderColor: "#4A5F71",
    elevation: 5,
  },
  image: {
    resizeMode: "contain",
    width: wp("35%"),
    height: hp("10%"),
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4A5F71",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
