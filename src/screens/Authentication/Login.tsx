import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SHADOW, SIZES } from "../../resources/Theme";
import LinearGradient from "react-native-linear-gradient";
import { ICONS, STRINGS } from "../../resources";
import CustomButton from "../../components/CustomButton";
import { TextInput } from "react-native-gesture-handler";

const Login = ({navigation}) => {
  return (
    <LinearGradient
      colors={[COLORS.white, COLORS.fadePrimary, COLORS.primary]} // Define your gradient colors here
      style={{
        flex: 1,
        padding: SIZES.padding,
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
        <Text
          style={{
            fontSize: SIZES.h2,
            color: COLORS.black,
            fontFamily: "Montserrat-ThinItalic",
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding,
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
            marginBottom: SIZES.padding,
            fontWeight: "bold",
          }}
        >
          Mobile Number
        </Text>
        <View
          style={{
            width: SIZES.width * 0.8,
            height: SIZES.height * 0.08,
            backgroundColor: COLORS.secondary,
            borderRadius: 30,
            //     padding: "3%",
            ...SHADOW,
          }}
        >
          <TextInput
            style={{
              width: SIZES.width * 0.8,
              height: SIZES.height * 0.08,
            }}
          ></TextInput>
        </View>

        <CustomButton
          style={{
            width: SIZES.width * 0.8,
          }}
          title={"Countinue"}
          onPress={()=>{
                navigation.navigate("OTP")
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({});
