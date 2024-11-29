import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SHADOW, SIZES } from "../../resources/Theme";
import LinearGradient from "react-native-linear-gradient";
import { ICONS, STRINGS } from "../../resources";
import CustomButton from "../../components/CustomButton";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import OtpInputs from 'react-native-otp-inputs';

const OtpScreen = () => {
  const navigation = useNavigation();
    const [otp, setOtp] = useState('');
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
                color: COLORS.black,
                fontSize: 30,
                fontWeight: '600',
                marginLeft: 30,
                marginTop: 60,
              }}>
              Enter OTP
            </Text>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 15,
                fontWeight: '200',
                marginLeft: 30,
              }}>
              We have sent OTP to your number
            </Text>
          </View>
               <View style={{
                marginTop: 60,
                 marginBottom: 20,
    // margin:60,
    padding: 20,
    // backgroundColor:'red',
    // ...SHADOW,
               }}>
              <OtpInputs
                numberOfInputs={4}
                handleChange={code => {
                  console.log(code);
                  setOtp(code);
                }}
                inputContainerStyles={{
                  width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
                }}
                focusStyles={{
                  borderColor: COLORS.primary,
                }}
                inputStyles={{
                    fontSize: 20,
                    fontWeight: '400',
                    color: COLORS.black,
                    textAlign: 'center',
                }}
                selectionColor={COLORS.primary}
                autofillFromClipboard={false}
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

export default OtpScreen;

const styles = StyleSheet.create({});
