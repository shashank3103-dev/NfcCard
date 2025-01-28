import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import { getDataFromEncryptedStorage } from "../resources/Utilities";
import { storageKeys } from "../resources/Constants";
import Login from "../screens/Authentication/Login";
import OTPScreen from "../screens/Authentication/OTPScreen";
import BottomTab from "./BottomTab";
import DrawerNavigation from "./DrawerNavigation";

const RootStack = createStackNavigator();
const RootNavigation = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    getDataFromEncryptedStorage(storageKeys.kACCESS_TOKEN).then((res) => {
      if (res) {
        setToken(token);
      }
    });
  };
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };
  return (
    <RootStack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={TransitionScreenOptions}
    >
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="OTP" component={OTPScreen} />
      <RootStack.Screen name="HomeTabs" component={DrawerNavigation} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
