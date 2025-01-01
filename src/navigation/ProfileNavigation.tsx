import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/profile/ProfileScreen";
import PersonalDetails from "../screens/profile/PersonalDetails";

const ProfileStack = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="PersonalDetails" component={PersonalDetails} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
