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
import { COLORS, SHADOW, SIZES } from "../../resources/Theme";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import OtpInputs from "react-native-otp-inputs";
import { ICONS, UTILITIES } from "../../resources";
import { storageKeys } from "../../resources/Constants";
import URLManager from "../../networkLayer/URLManager";


const OtpScreen = ({ navigation, route }: any) => {

  const [otp, setOtp] = useState("");
  const { email } = route.params;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [timeLeft, setTimeLeft] = useState(45);
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [confirmedOtp, setconfirmedOtp] = useState<string>("");

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);
  useEffect(() => {
    if (route?.params?.data) {
      console.log(route.params);
      setconfirmedOtp(route.params?.data?.otp);
      setUserId(route.params?.data?.user_id);
    }
  }, [route.params]);

  const verifyOTPApiCall = () => {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .verifyOTP({ otp_code: otp, email: email })
        .then((res) => {
          console.log(res);
          return res.json() as Promise<any>;
        })
        .then(async (res: any) => {
          if (!res.error) {
            UTILITIES.setDataInStorage(
              storageKeys.kPROFILE_DETAILS,
              JSON.stringify(route?.params?.data)
            );
            await UTILITIES.setDataInEncriptedStorage(
              storageKeys.kTOKEN,
              route?.params?.token
            );
            navigation.navigate("Home");
          } else {
            if (res.error == 'Failed to send OTP')
            Alert.alert("Error", res.error);
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
  };

  async function handleOTP() {
    if (otp.length < 6) {
      Alert.alert("Error", "Please enter OTP");
    } else if (otp != confirmedOtp) {
      Alert.alert("Error", "Invalid OTP");
    } else {
      await verifyOTPApiCall();
    }
  }
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
              fontSize: 30,
              fontWeight: "600",
              marginLeft: 20,
              // marginTop: 70,
            }}
          >
            Enter OTP
          </Text>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 15,
              fontWeight: "200",
              marginLeft: 20,
            }}
          >
            We have sent OTP to your number
          </Text>
          <View style={styles.otpContainer}>
            <OtpInputs
              numberOfInputs={6}
              handleChange={(code) => {
                console.log(code);
                setOtp(code);
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
              fontWeight: "200",
            }}
          >
            Haven't got the OTP yet?
            {timeLeft != 0 ? ` in ${timeLeft} sec` : ""}
          </Text>
          <TouchableOpacity
            disabled={timeLeft != 0}
            // onPress={resendOTPApiCall}
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
                fontWeight: "600",
                color: COLORS.white,
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
            title={"Continue"}
            onPress={handleOTP}
           
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
    // margin:2,
    // gap:10,
    padding: 10,
    // backgroundColor:'red',
    // ...SHADOW,
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
    // ...SHADOW,

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
