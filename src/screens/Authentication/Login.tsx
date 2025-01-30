import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SHADOW, SIZES } from "../../resources/Theme";
import LinearGradient from "react-native-linear-gradient";
import { ICONS } from "../../resources";
import CustomButton from "../../components/CustomButton";
import URLManager from "../../networkLayer/URLManager";
import CustomLoadingBar from "../../components/CustomLoadingBar";
const Login = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  function isValidEmail(input: string) {
    var basicEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return basicEmailPattern.test(input);
  }
  async function emailLoginApiCall() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .userEmailLogin({ email: email })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (!res.error) {
            navigation.navigate("OTP", { email: email, ...res });
          } else {
            if (res.error == "Failed to send OTP")
              Alert.alert("Error", res.error);
          }
        })
        .catch((e) => {
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  function isDataValid() {
    if (email.trim() == "") {
      Alert.alert("Error", "Please enter a valid email address .");
      return false;
    }
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    return true;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <LinearGradient
            colors={[COLORS.white, COLORS.fadePrimary, COLORS.primary]}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                width: SIZES.width * 0.6,
                height: SIZES.height * 0.3,
                alignItems: "center",
                justifyContent: "center",
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
            </View>
            <View
              style={{
                width: SIZES.width * 0.8,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  ...FONTS.h0,
                  marginStart: 20,
                }}
              >
                Enter your
              </Text>
              <Text
                style={{
                  ...FONTS.h0,
                  marginStart: 20,
                  marginBottom: 20,
                }}
              >
                Email Address
              </Text>
              <View
                style={{
                  width: SIZES.width * 0.8,
                  backgroundColor: COLORS.secondary,
                  borderRadius: 30,
                  ...SHADOW,
                }}
              >
                <TextInput
                  style={{
                    // width: SIZES.width * 0.8,
                    height: 50,
                    marginStart: 10,
                    marginEnd: 10,
                    color: COLORS.black,
                    fontFamily: "Poppins-Regular",
                    fontSize: 15,
                  }}
                  onChangeText={(text: string) => setEmail(text)}
                  keyboardType="email-address"
                  placeholder="Email"
                  placeholderTextColor={COLORS.darkGray}
                />
              </View>
              <CustomButton
                style={{
                  width: SIZES.width * 0.8,
                }}
                title={loading ? "Processing..." : "Continue"}
                onPress={() => {
                  if (isDataValid()) emailLoginApiCall();
                }}
                disabled={loading}
              />
            </View>
            <Text
              style={{
                fontSize: 10,
                marginTop: 30,
                color: COLORS.black,
                fontFamily: "Poppins-Regular",
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
          </LinearGradient>
        </ScrollView>
        {loading && (
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              position: "absolute",
              zIndex: 1,
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <CustomLoadingBar />
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({});
