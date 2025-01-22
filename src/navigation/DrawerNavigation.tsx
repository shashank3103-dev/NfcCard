import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTab";
import CustomDrawerContent from "../components/CustomDrawerCustom";
import Login from "../screens/Authentication/Login";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#c6cbef",
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
