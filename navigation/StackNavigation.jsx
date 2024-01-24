import React, { useLayoutEffect, useState } from "react";
import { useUserData } from "../UserDataContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "../navigation/BottomTabsNavigator";
import Frontpage from "../screens/FrontPage/Frontpage";
import Login from "../screens/Login/Login";
import OTPVerify from "../screens/OTPAuthentication/OTPVerify";
import EmailRecover from "../screens/ForgotPassword/EmailRecover";
import PhoneRecover from "../screens/ForgotPassword/PhoneRecover";
import NewPassword from "../screens/ForgotPassword/NewPassword";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import UploadFrontPage from "../screens/UploadPages/UploadFrontPage";
import UploadBackPage from "../screens/UploadPages/UploadBackPage";
import UpdateFrontImage from "../screens/UploadPages/UpdateFrontImage";
import UpdateBackImage from "../screens/UploadPages/UpdateBackImage";
import VerifyLogin from "../screens/OTPAuthentication/VerifyLogin";
import PasswordVerify from "../screens/OTPAuthentication/PasswordVerify";
import SignUP from "../screens/SignUp/SignUp";
import { useNavigation } from "@react-navigation/native";
import Congratulations from "../screens/CongratulationsPage/Congratulations";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const navigation = useNavigation();
  const { userData } = useUserData();
  const [initialRoute, setInitialRoute] = useState("FrontPage");

  console.log("userData", userData);

  useLayoutEffect(() => {
    if (userData !== null) {
      setInitialRoute("BottomTabsNavigator");
    } else {
      setInitialRoute("FrontPage");
    }
    // console.log("initialRoute use", initialRoute);
  }, [userData]);
  // console.log("initialRoutedsadsads", initialRoute);
  return (
    <>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          animation: "slide_from_right",
        }}
      >
        {userData ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="BottomTabsNavigator"
              component={BottomTabsNavigator}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="VerifyLogin"
              component={VerifyLogin}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="OTPVerify"
              component={OTPVerify}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="PasswordVerify"
              component={PasswordVerify}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EmailRecover"
              component={EmailRecover}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="PhoneRecover"
              component={PhoneRecover}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="NewPassword"
              component={NewPassword}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ForgotPassword"
              component={ForgotPassword}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UploadFrontPage"
              component={UploadFrontPage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UpdateFrontImage"
              component={UpdateFrontImage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UploadBackPage"
              component={UploadBackPage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UpdateBackImage"
              component={UpdateBackImage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Congratulations"
              component={Congratulations}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SignUP"
              component={SignUP}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            {/* <Stack.Screen
              options={{ headerShown: false }}
              name="FrontPage"
              component={Frontpage}
            /> */}
          </>
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="FrontPage"
              component={Frontpage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SignUP"
              component={SignUP}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="OTPVerify"
              component={OTPVerify}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="VerifyLogin"
              component={VerifyLogin}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="PasswordVerify"
              component={PasswordVerify}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EmailRecover"
              component={EmailRecover}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="PhoneRecover"
              component={PhoneRecover}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="NewPassword"
              component={NewPassword}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ForgotPassword"
              component={ForgotPassword}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UploadFrontPage"
              component={UploadFrontPage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UpdateFrontImage"
              component={UpdateFrontImage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UploadBackPage"
              component={UploadBackPage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UpdateBackImage"
              component={UpdateBackImage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Congratulations"
              component={Congratulations}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
