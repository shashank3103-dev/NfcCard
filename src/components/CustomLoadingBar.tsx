import React from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
// import { COLORS } from '../../resources';
import LottieView from "lottie-react-native";
import { COLORS } from "../resources";
const CustomLoadingBar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "white",
          borderRadius: 60, // Make it a perfect circle
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          overflow:'hidden',
          elevation: 5, // For Android shadow
        }}
      >
        <LottieView
          style={styles.loadingAnimation}
          source={require("../assets/anim/nfcloading.json")} // Replace with your Lottie JSON file
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingAnimation: {
    width: 120,
    height: 120,
    // marginTop: 90,
    // backgroundColor: "white",
    borderRadius: 100,
   
    // flex:1,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'transparent',
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a background overlay
  },
  loadingGif: {
    width: 50,
    height: 50,
  },
});

export default CustomLoadingBar;
