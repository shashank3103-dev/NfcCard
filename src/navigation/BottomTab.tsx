import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ICONS, SHADOW } from "../resources";
import HomeNavigation from "./HomeNavigation";
import ShopNavigation from "./ShopNavigation";
import CartScreen from "../screens/cartscreen/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { SHADOW_BOTTOM_TAB } from "../resources/Theme";
function getIcons(routeName: string) {
  switch (routeName) {
    case "HomeScreen":
      return ICONS.HOME;
    case "Shop":
      return ICONS.SHOP;
    case "Cart":
      return ICONS.CART;
    case "Profile":
      return ICONS.PROFILE;
    default:
      return ICONS.HOME;
  }
}
function MyTabBar({
  state,
  descriptors,
  navigation,
  keyboardVisible,

}: any) {
  // Don't render the tab bar if the keyboard is visible
  if (keyboardVisible) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: Platform.OS == "ios" ? "5%" : "3%",
        paddingHorizontal: "10%",
        backgroundColor: COLORS.bottomTabColor,
        borderWidth: 1,
        borderColor: COLORS.gray,
        justifyContent: "space-between",
        ...SHADOW_BOTTOM_TAB,
        // elevation:20,
      }}
    >
      {state.routes.map(
        (route: { key: string | number; name: any }, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Image
                source={getIcons(label)}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  tintColor: isFocused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: isFocused ? COLORS.primary : COLORS.black,
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
 
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // Ensure the tab bar is hidden when the keyboard is visible
        tabBarStyle: keyboardVisible ? { display: "none" } : undefined,
      }}
      tabBar={(props: any) => (
        <MyTabBar {...props} keyboardVisible={keyboardVisible} />
      )}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Shop" component={ShopNavigation} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
