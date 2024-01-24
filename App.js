import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { UserDataProvider } from "./UserDataContext";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
      });

      setFontLoaded(true);
      await SplashScreen.hideAsync();
    };

    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null; // You can render a loading indicator here if you want
  }

  return (
    <UserDataProvider>
      <StatusBar />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </UserDataProvider>
  );
}

const styles = StyleSheet.create({
  // Add your styles here if needed
});
