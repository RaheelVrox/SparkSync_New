import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../Component/Header";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const UploadFrontPage = () => {
  const navigation = useNavigation();
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedUri = result.assets[0];
        setSelectedImageUri(selectedUri);
        navigation.navigate("UpdateFrontImage", {
          imageUri: selectedUri,
        });
      }
    } catch (error) {
      console.error("Error picking an image", error);
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
          // width: Dimensions.get("screen").width,
          // height: Dimensions.get("screen").height,
        }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Header
            title="Upload Front Page"
            subTitle="Please upload the front part of your bill "
          />
          <View style={{ flex: 1, position: "relative" }}>
            <View>
              <View
                style={{
                  alignSelf: "center",
                  paddingTop: wp(20),
                }}
              />
            </View>
            <View style={styles.Gallerybox}>
              <Image
                style={{
                  width: 185,
                  height: 185,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/Gallery.png")}
              />
            </View>
            <View
              style={{
                marginTop: wp(13),
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#B6B6B6",
                  marginHorizontal: 24,
                  textAlign: "center",
                  lineHeight: 30,
                }}
              >
                Please upload a high-quality image in either JPG or PNG format.
                The maximum file size allowed is 10MB.
              </Text>
            </View>
            <>
              <LinearGradient
                colors={["#6FCAFF", "#0081CC"]}
                style={styles.button}
              >
                <TouchableOpacity
                  onPress={pickImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      fontFamily: "Roboto-Regular",
                      color: "#fff",
                    }}
                  >
                    Browse Files
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UploadFrontPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(13),
    flex: 1,
  },
  button: {
    width: wp("85%"),
    height: hp("6.5%"),
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
    bottom: 60,
  },
});
