import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from '../screens/shop/ShopScreen';

const ShopStack = createNativeStackNavigator();
const ShopNavigation = () => {
  return (
    <ShopStack.Navigator screenOptions={{ headerShown: false }}>
      <ShopStack.Screen name="ShopScreen" component={ShopScreen} />
    </ShopStack.Navigator>
  );
};

export default ShopNavigation;