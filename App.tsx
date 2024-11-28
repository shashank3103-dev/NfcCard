import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import RootNavigation from '../nfc/src/navigation/RootNavigation'; // Root navigation system
import {Provider} from 'react-redux';
import { store } from './src/stateManagement/Store';
// import {store} from './src/stateManagement/store'; 

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