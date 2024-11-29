import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { COLORS, SHADOW, SIZES } from "../../resources/Theme";
import LinearGradient from "react-native-linear-gradient";
import { ICONS, STRINGS } from "../../resources";
import CustomButton from "../../components/CustomButton";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Ensure proper keyboard behavior based on platform
    >
      <LinearGradient
        colors={[COLORS.white, COLORS.fadePrimary, COLORS.primary]} // Define your gradient colors here
        style={{
          flex: 1,
          //  padding: SIZES.padding,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: SIZES.width * 0.6,
              height: SIZES.height * 0.3,
            }}
            resizeMode="contain"
            source={ICONS.APP_LOGO_ICON}
          ></Image>
          <View
            style={{
              height: 100,
              justifyContent: "center",
              marginRight: 100,
              position: "relative",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.black,
                fontFamily: "Montserrat-ThinItalic",
                fontWeight: "bold",
              }}
            >
              Enter Your
            </Text>
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.black,
                fontFamily: "Montserrat-ThinItalic",
                fontWeight: "bold",
              }}
            >
              Mobile Number
            </Text>
          </View>
          <View
            style={{
              width: SIZES.width * 0.8,
              height: SIZES.height * 0.08,
              backgroundColor: COLORS.secondary,
              borderRadius: 30,
              ...SHADOW,
            }}
          >
            <TextInput
              style={{
                width: SIZES.width * 0.8,
                height: SIZES.height * 0.08,
              }}
              keyboardType="phone-pad"
            />
          </View>
          <CustomButton
            style={{
              width: SIZES.width * 0.8,
            }}
            title={"Continue"}
            onPress={() => {
              navigation.navigate("OTP" as never);
            }}
          />

          <Text
            style={{
              fontSize: 10,
              marginTop: 30,
              color: COLORS.black,
            }}
          >
            Or Login with
          </Text>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              gap: 20,
              marginTop: 10,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
              source={ICONS.GOOGLE}
            ></Image>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
              source={ICONS.APPLE}
            ></Image>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
              source={ICONS.FACEBOOK}
            ></Image>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});
