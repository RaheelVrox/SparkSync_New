import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../Component/Header";
import SavingTips from "../../Component/SavingTips";
import FAQ from "../../Component/FAQ";

const FrequentlyQuestion = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Header
              title="Frequently Asked Questions"
              subTitle="Some of the ways that Texans can save energy"
            />
            <View style={{ paddingTop: 35 }}>
              <SavingTips
                heading="What is Spark Sync?"
                tips={[
                  "Spark Sync is an electricity provider finding app that helps you to find the best plan for your needs.",
                ]}
              />
            </View>
            <FAQ text="How does Spark Sync work?" />
            <FAQ text="Is Spark Sync free to use?" />
            <FAQ text="How do I switch electricity providers with Spark Sync?" />
            <FAQ text="Can I trust the information provided by Spark Sync?" />
            <FAQ text="Can I trust the information provided by Spark Sync?" />
            <FAQ text="Can I trust the information provided by Spark Sync?" />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FrequentlyQuestion;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(14),
    flex: 1,
  },
});
