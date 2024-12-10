import React from "react";
import { LogBox, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/stateManagement/Store";
import RootNavigation from "./src/navigation/RootNavigation";

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      {/* SafeAreaView ensures content is displayed within safe areas */}
      <SafeAreaView style={styles.container}>
        {/* StatusBar for customizing the status bar appearance */}
        <StatusBar 
         translucent
          barStyle="dark-content" // Options: 'default', 'light-content', 'dark-content'
          backgroundColor="transparent" // Customize as per your theme
        />
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView covers the entire screen
    backgroundColor: "transparent", // Default background color
  },
});
