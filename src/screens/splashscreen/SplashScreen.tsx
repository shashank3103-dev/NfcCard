import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Image, Alert } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS, ICONS, SIZES, UTILITIES } from "../../resources";
import { storageKeys } from "../../resources/Constants";
import { getDataFromEncryptedStorage } from "../../resources/Utilities";
import URLManager from "../../networkLayer/URLManager";
const { width } = Dimensions.get("window");

const SplashScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
    opacity.value = withTiming(1, { duration: 1500 });

    const timer = setTimeout(() => {
      handleNavigation();
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation, scale, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  async function newAccessToken() {
    try {
      setLoading(true);
      const refreshToken = await UTILITIES.getDataFromEncryptedStorage(
        storageKeys.kREFRESH_TOKEN
      );
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }
      let urlManager = new URLManager();
      return urlManager
        .refreshAccessToken({ refresh: refreshToken })
        .then((res) => {
          return res.json();
        })
        .then(async (res) => {
          if (!res.error) {
            console.log("New Access Token Response:", res);
            await UTILITIES.setDataInEncryptedStorage(
              storageKeys.kACCESS_TOKEN,
              res.access
            );
            console.log("Access token updated successfully");
          } else {
            Alert.alert("Error", res.error || "Failed to refresh token");
          }
          console.log(res);
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  const handleNavigation = async () => {
    const token = await getDataFromEncryptedStorage(storageKeys.kACCESS_TOKEN);
    console.log("Valid ACCESS_TOKEN found:", token);
    if (token) {
      navigation.replace("BottomTab");
    } else {
      console.log("ACCESS_TOKEN missing. Attempting to refresh...");
      const newToken = await newAccessToken();

      if (newToken) {
        console.log("Token refreshed successfully:", newToken);
        navigation.replace("BottomTab");
      } else {
        console.log("Failed to refresh token. Redirecting to Login...");
        navigation.replace("Login");
      }
    }
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          style={{
            width: SIZES.width * 0.4,
            height: SIZES.height * 0.4,
          }}
          resizeMode="contain"
          source={ICONS.APP_LOGO_ICON}
        ></Image>
      </Animated.View>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  logoContainer: {
    backgroundColor: "#ffffff",
    height: width * 0.4,
    width: width * 0.4,
    borderRadius: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    //     ...SHADOW,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
