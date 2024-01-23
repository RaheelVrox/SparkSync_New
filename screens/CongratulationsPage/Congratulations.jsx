import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
const Congratulations = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/ImageBackground.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <View style={styles.container}>
          <Image
            style={{
              resizeMode: "contain",
              marginBottom: 22,
              height: 71,
              width: 71,
            }}
            source={require("../../assets/checkmark.png")}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              fontWeight: "400",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Congratulations
          </Text>
          <View
            style={{
              marginTop: 25,
              marginHorizontal: 26,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                fontWeight: "400",
                textAlign: "center",
                color: "#B6B6B6",
                lineHeight: 24,
              }}
            >
              Your bill has been submitted successfully. Our sales
              representative will contact you soon.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("BottomTabsNavigator", {
                screen: "HomeStack",
              })
            }
            style={styles.button}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
                fontFamily: "Roboto-Regular",
                color: "#069FF8",
              }}
            >
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: wp(60),
  },
  button: {
    width: wp("40%"),
    height: hp("6.5%"),
    backgroundColor: "#04202C",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#607A8C",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 90,
  },
});
