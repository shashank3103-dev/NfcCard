import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SideMenu from './sideMenu';


const CustomDrawerContent = props => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={{flexGrow: 2}}>
        <SideMenu navigation={navigation} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 2,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomDrawerContent;
