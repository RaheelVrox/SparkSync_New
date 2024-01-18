import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { UserDataProvider } from "./UserDataContext";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };

    if (fontsLoaded) {
      hideSplash();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <UserDataProvider>
        <StatusBar />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </UserDataProvider>
    </>
  );
}

const styles = StyleSheet.create({});
