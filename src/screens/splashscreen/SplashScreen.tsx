import React, { useEffect } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS, ICONS, SHADOW, SIZES } from "../../resources";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  // Animation for scaling and fading
  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
    opacity.value = withTiming(1, { duration: 1500 });

    const timer = setTimeout(() => {
      navigation.navigate("Login" as never);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, scale, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

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
