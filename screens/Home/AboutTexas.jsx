import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const AboutTexas = () => {
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
        }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Image
              style={{
                width: wp("18%"),
                height: wp("18%"),
                resizeMode: "contain",
              }}
              source={require("../../assets/BackButton.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "Roboto-Regular",
              color: "#069FF8",
              textAlign: "center",
            }}
          >
            About Texas Electricity
          </Text>
          <ScrollView>
            <View style={styles.detailcontainer}>
              <Text style={styles.text}>
                Texas electricity is a topic that affects many people in the
                state, especially those who live in rural areas or have high
                energy bills. Texas is one of the largest electricity consumers
                in the United States, and it has a deregulated power market that
                allows customers to choose their own electric providers and
                plans. However, this also means that customers have to shop
                around for the best rates and deals, and compare different
                options before switching providers.
              </Text>
              <Text style={styles.text}>
                One of the benefits of having a deregulated power market is that
                customers can find cheaper and more affordable electricity plans
                from various providers. According to Choose Energy, an
                independent marketplace that lets you compare Texas power rates
                and providers in your area, the average Texas energy rate as of
                September 2023 was 14.58 cents per kilowatt-hour (kWh), which is
                about 1.2% lower than the average rate in September 2022 and
                10.5% lower than the national average of 16.29 cents per kWh.
                The cheapest Texas electricity rate on their website as of
                January 2024 was 12.3 cents per kWh for the 1,000 kWh standard
                monthly usage. Texas electricity is a topic that affects many
                people in the state, especially those who live in rural areas or
                have high energy bills. Texas is one of the largest electricity
                consumers in the United States, and it has a deregulated power
                market that allows customers to choose their own electric
                providers and plans. However, this also means that customers
                have to shop around for the best rates and deals, and compare
                different options before switching providers. Texas electricity
                is a topic that affects many people in the state, especially
                those who live in rural areas or have high energy bills. Texas
                is one of the largest electricity consumers in the United
                States, and it has a deregulated power market that allows
                customers to choose their own electric providers and plans.
                However, this also means that customers have to shop around for
                the best rates and deals, and compare different options before
                switching providers.
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AboutTexas;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(14),
    flex: 1,
  },
  detailcontainer: {
    borderWidth: 1,
    borderColor: "#607A8C",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 20,
    flex: 1,
  },
  text: {
    color: "#B6B6B6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
});
