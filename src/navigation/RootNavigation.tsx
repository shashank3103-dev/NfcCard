import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/homescreen/HomeScreen";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import { getDataFromEncryptedStorage } from "../resources/Utilities";
import { storageKeys } from "../resources/Constants";
import Login from "../screens/Authentication/Login";
import OTPScreen from "../screens/Authentication/OTPScreen";
import BottomTab from "./BottomTab";

const RootStack = createStackNavigator();
const RootNavigation = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    getDataFromEncryptedStorage(storageKeys.kTOKEN).then((res) => {
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
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="BottomTab"      
        screenOptions={TransitionScreenOptions}
      >
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="OTP" component={OTPScreen} />
        <RootStack.Screen name="BottomTab" component={BottomTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
