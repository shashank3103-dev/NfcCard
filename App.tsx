import React from 'react';
import {SafeAreaView, StatusBar,LogBox, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '../nfc/src/navigation/RootNavigation'; // Root navigation system
import {Provider} from 'react-redux';
import {store} from './src/stateManagement/store'; // Redux store


const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});