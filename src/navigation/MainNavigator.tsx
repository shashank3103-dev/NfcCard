import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={RootNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
