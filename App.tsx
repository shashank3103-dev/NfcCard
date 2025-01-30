import React from "react";
import { LogBox, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/stateManagement/Store";
import MainNavigator from "./src/navigation/MainNavigator";
import Toast from "react-native-toast-message";

const App = () => {
  LogBox.ignoreAllLogs();
   
  return (
    <Provider store={store}>
      
      <MainNavigator />
       <Toast />
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({});
