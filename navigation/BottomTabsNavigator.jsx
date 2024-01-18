import { StyleSheet, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomePage from "../screens/Home/HomePage";
import UploadFrontPage from "../screens/UploadPages/UploadFrontPage";
import UpdateFrontImage from "../screens/UploadPages/UpdateFrontImage";
import Profile from "../screens/Profile/Profile";
import EditProfile from "../screens/Profile/EditProfile";
import LoginRegister from "../screens/LoginRegister/LoginRegister";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import UploadBackPage from "../screens/UploadPages/UploadBackPage";
import UpdateBackImage from "../screens/UploadPages/UpdateBackImage";
import EnergySavingTips from "../screens/Home/EnergySavingTips";
import FrequentlyQuestion from "../screens/Home/FrequentlyQuestion";
import Properties from "../screens/Home/Properties";
import DeregulatedAreas from "../screens/Home/DeregulatedAreas";
import AboutTexas from "../screens/Home/AboutTexas";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      navigation.navigate("HomeStack", { screen: "HomePage" });
    });
    return () => {
      unsubscribeFocus();
    };
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
        name="EnergySavingTips"
        component={EnergySavingTips}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
        name="FrequentlyQuestion"
        component={FrequentlyQuestion}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
        name="Properties"
        component={Properties}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
        name="DeregulatedAreas"
        component={DeregulatedAreas}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
        name="AboutTexas"
        component={AboutTexas}
      />
    </Stack.Navigator>
  );
};

const AddNew = ({ navigation }) => {
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      navigation.navigate("AddNew", { screen: "UploadFrontPage" });
    });
    return () => {
      unsubscribeFocus();
    };
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="UploadFrontPage"
      screenOptions={{
        headerShadowVisibl: false,
      }}
    >
      <Stack.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerStyle: {},
          headerTitleAlign: "center",
        }}
        name="UploadFrontPage"
        component={UploadFrontPage}
      />

      <Stack.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerStyle: {},
          headerTitleAlign: "center",
        }}
        name="UpdateFrontImage"
        component={UpdateFrontImage}
      />
      <Stack.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerStyle: {},
          headerTitleAlign: "center",
        }}
        name="UploadBackPage"
        component={UploadBackPage}
      />
      <Stack.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerStyle: {},
          headerTitleAlign: "center",
        }}
        name="UpdateBackImage"
        component={UpdateBackImage}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = ({ navigation }) => {
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      navigation.navigate("ProfileStack", { screen: "Profile" });
    });
    return () => {
      unsubscribeFocus();
    };
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShadowVisibl: false,
      }}
    >
      <Stack.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerStyle: {},
          headerTitleAlign: "center",
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerStyle: {},
          headerTitleAlign: "center",
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerShown: false,
          tabBarVisible: false,
        })}
        name="LoginRegister"
        component={LoginRegister}
      />
    </Stack.Navigator>
  );
};
const BottomTabsNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: "#DEB9A9",
        tabBarInactiveTintColor: "#fff",
        tabBarBackground: () => (
          <LinearGradient
            colors={["#04202C", "#04202C"]}
            style={{
              flex: 1,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: "#000000",
              borderColor: "#607A8C",
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
            start={{ x: 0, y: 0.3 }}
            end={{ x: 0.6, y: 0.6 }}
          />
        ),
        tabBarStyle: [
          style.tabStyleProp,
          {
            height:
              Platform.OS === "ios" ? 72 + insets.bottom : 72 + insets.bottom,
            backgroundColor: "#000000",
            borderColor: "#000000",
          },
        ],
        tabBarItemStyle: style.tabStyle,
        headerStyle: {
          backgroundColor: "transparent",
          borderColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "HOME",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddNew}
        options={{
          tabBarLabel: "ADD NEW",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" color={color} size={size + 5} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: "PROFILE",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons
                name="ios-person-circle-sharp"
                color={color}
                size={size + 6}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabsNavigator;
const style = StyleSheet.create({
  tabStyle: {
    backgroundColor: "transparent",
    paddingBottom: 7,
  },
  tabStyleProp: {
    elevation: 20,
    height: Platform.OS === "ios" ? wp(20) : wp(17),
    marginBottom: Platform.OS === "ios" ? -5 : wp(0),
    position: "relative",
  },
});
