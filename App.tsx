import React from "react";
import { LogBox, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/stateManagement/Store";
import RootNavigation from "./src/navigation/RootNavigation";

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
