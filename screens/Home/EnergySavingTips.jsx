import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../Component/Header";
import SavingTips from "../../Component/SavingTips";
import { useNavigation } from "@react-navigation/native";

const EnergySavingTips = () => {
  const navigation = useNavigation();
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.container}
        >
          <Header
            title="Energy Saving Tips"
            subTitle="Some of the ways that Texans can save energy "
          />
          <View style={{ paddingTop: 35 }}>
            <SavingTips
              heading="Lighting"
              tips={[
                "Use LED bulbs instead of incandescent bulbs. They last longer and use less electricity.",
                "Turn off lights when you leave a room or when you don’t need them. You can also use timers or motion sensors to turn them off automatically.",
                "Use natural light as much as possible during the day. Open curtains, blinds, or shades to let the sun in.",
              ]}
            />
            <SavingTips
              heading="Water Heaters"
              tips={[
                "Use LED bulbs instead of incandescent bulbs. They last longer and use less electricity.",
                "Turn off lights when you leave a room or when you don’t need them. You can also use timers or motion sensors to turn them off automatically.",
                "Use natural light as much as possible during the day. Open curtains, blinds, or shades to let the sun in.",
              ]}
            />
            <SavingTips
              heading="Water Heaters"
              tips={[
                "Use LED bulbs instead of incandescent bulbs. They last longer and use less electricity.",
                "Turn off lights when you leave a room or when you don’t need them. You can also use timers or motion sensors to turn them off automatically.",
                "Use natural light as much as possible during the day. Open curtains, blinds, or shades to let the sun in.",
              ]}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EnergySavingTips;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(14),
    flex: 1,
  },
});
