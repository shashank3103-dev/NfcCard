import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/homescreen/HomeScreen";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import { getDataFromEncriptedStorage } from "../resources/Utilities";
import { storageKeys } from "../resources/Constants";
import Login from "../screens/Authentication/Login";
import OTPScreen from "../screens/Authentication/OTPScreen";

const RootStack = createStackNavigator();
const RootNavigation = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    getDataFromEncriptedStorage(storageKeys.kTOKEN).then((res) => {
      if (res) {
        setToken(token);
      }
    });
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator
        // initialRouteName="BottomTabStack"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="OTP" component={OTPScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
