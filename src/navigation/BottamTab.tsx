/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, SHADOW_PRIMARY} from '../resources';
import HomeNavigation from './HomeStack';
import ShopNavigation from './ShopStack';
import MantrasNavigation from './MantrasStack';
import UserProfile2 from '../screens/Profile/UserProfile2';
import GlobalMiniPlayer from '../screens/Mantras/GlobalMiniPlayer';
import AstroStack from './AstroStack';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getIcons(routeName: string) {
  switch (routeName) {
    case 'HomeScreen':
      return ICONS.HOME_TAB_ICON;
    case 'Shop':
      return ICONS.SHOP_TAB_ICON;
    case 'Mantras':
      return ICONS.MANTRAS_ICON;
    case 'Astrology':
      return ICONS.ASTROLOGY2;
    case 'Darshan':
      return ICONS.PROFILE_TAB_ICON;
    default:
      return ICONS.HOME_TAB_ICON;
  }
}

function MyTabBar({state, descriptors, navigation, keyboardVisible}: any) {
  // Don't render the tab bar if the keyboard is visible
  if (keyboardVisible) {
    return null;
  }

  return (
    <>
      <GlobalMiniPlayer />
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: Platform.OS == 'ios' ? '5%' : '3%',
          paddingHorizontal: '5%',
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 1,
          borderColor: COLORS.profileGrey,
          justifyContent: 'space-between',
          ...SHADOW_PRIMARY,
        }}>
        {state.routes.map(
          (route: {key: string | number; name: any}, index: any) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={label}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{alignItems: 'center', justifyContent: 'center'}}>
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
                    fontWeight: '500',
                  }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      const showWelcomeAlert = async () => {
        const hasShownAlert = await AsyncStorage.getItem(
          'hasShownWelcomeAlert',
        );
        if (!hasShownAlert) {
          Alert.alert(
            'Welcome to DivineZone',
            'You have successfully logged in as a User.',
          );
          await AsyncStorage.setItem('hasShownWelcomeAlert', 'true');
        }
      };
      showWelcomeAlert();
    }, []),
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // Ensure the tab bar is hidden when the keyboard is visible
        tabBarStyle: keyboardVisible ? {display: 'none'} : undefined,
      }}
      tabBar={props => (
        <MyTabBar {...props} keyboardVisible={keyboardVisible} />
      )}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Shop" component={ShopNavigation} />
      <Tab.Screen name="Astrology" component={AstroStack} />
      <Tab.Screen name="Mantras" component={MantrasNavigation} />
      <Tab.Screen name="Darshan" component={UserProfile2} />
    </Tab.Navigator>
  );
}
