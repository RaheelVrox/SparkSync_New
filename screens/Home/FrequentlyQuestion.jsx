import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Header from "../../Component/Header";
import FAQ from "../../Component/FAQ";

const FrequentlyQuestion = () => {
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Header
              title="Frequently Asked Questions"
              subTitle="Some of the ways that Texans can save energy"
            />
            <View style={{ paddingTop: 45 }}>
              <FAQ question="" answer="" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FrequentlyQuestion;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});
