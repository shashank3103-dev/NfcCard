import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SIZES } from "../../resources/Theme";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import OtpInputs from "react-native-otp-inputs";
import { ICONS, UTILITIES } from "../../resources";
import { storageKeys } from "../../resources/Constants";
import URLManager from "../../networkLayer/URLManager";
const OtpScreen = ({ navigation, route }: any) => {
  const [otp, setOtp] = useState("");
  const { email } = route.params;
  const windowHeight = useWindowDimensions().height;
  const [timeLeft, setTimeLeft] = useState(45);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);
  async function verifyOTPApiCall() {
    if (otp.length < 6) {
      Alert.alert("Error", "Please enter a 6-digit OTP.");
      return;
    }
    setLoading(true);
    let urlManager = new URLManager();
    try {
      const response = await urlManager.verifyOTP({ email, otp_code: otp });
      const res = await response.json();

      if (response.ok && !res.error) {
        console.log("OTP Verified Successfully. Storing tokens...");
        await UTILITIES.setDataInEncryptedStorage(
          storageKeys.kEMAIL,
          route.params.email
        );
        await UTILITIES.setDataInEncryptedStorage(
          storageKeys.kACCESS_TOKEN,
          res.access_token
        );
        await UTILITIES.setDataInEncryptedStorage(
          storageKeys.kREFRESH_TOKEN,
          res.refresh_token
        );
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeTabs" }],
        });
      } else {
        Alert.alert("Error", res.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        colors={[COLORS.white, COLORS.fadePrimary, COLORS.primary]}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            paddingVertical: windowHeight * 0.05,
            paddingHorizontal: "10%",
            flex: 1,
          }}
        >
          <Image
            style={{
              width: SIZES.width * 0.6,
              height: SIZES.height * 0.3,
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={ICONS.APP_LOGO_ICON}
          ></Image>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h0,
              marginLeft: 20,
            }}
          >
            Enter OTP
          </Text>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 15,
              fontFamily: "Poppins-ExtraLight",
              marginLeft: 20,
            }}
          >
            We have sent OTP to your Email.
          </Text>
          <View style={styles.otpContainer}>
            <OtpInputs
              numberOfInputs={6}
              handleChange={(code) => {
                console.log(code);
                setOtp((prevOtp) => {
                  if (prevOtp !== code) return code;
                  return prevOtp;
                });
              }}
              inputContainerStyles={styles.inputContainer}
              focusStyles={styles.inputContainerFocused}
              inputStyles={styles.inputStyle}
              selectionColor={COLORS.primary}
              autofillFromClipboard={false}
            />
          </View>
          <Text
            style={{
              marginTop: "10%",
              textAlign: "center",
              fontSize: 13,
              color: COLORS.black,
              fontFamily: "Poppins-ExtraLight",
            }}
          >
            Haven't got the OTP yet?
            {timeLeft != 0 ? ` in ${timeLeft} sec` : ""}
          </Text>
          <TouchableOpacity
            disabled={timeLeft != 0}
            onPress={() => {
              setTimeLeft(60);
            }}
            style={{
              alignItems: "flex-end",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                marginTop: "3%",
                fontSize: 13,
                fontFamily: "Poppins-Bold",
                color: COLORS.white,
                textTransform: "none",
              }}
            >
              {" "}
              Resend OTP
            </Text>
          </TouchableOpacity>
          <CustomButton
            style={{
              width: SIZES.width * 0.8,
            }}
            title={loading ? "Verifying..." : "Continue"}
            onPress={verifyOTPApiCall}
            disabled={loading}
          />
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
export default OtpScreen;
const styles = StyleSheet.create({
  otpContainer: {
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
  },
  inputContainer: {
    width: 40,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  inputContainerFocused: {
    borderColor: COLORS.primary,
  },
  inputStyle: {
    fontSize: 20,
    fontWeight: "400",
    color: COLORS.black,
    textAlign: "center",
  },
});
