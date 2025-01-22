import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SIZES } from "../../resources/Theme";
import { ICONS } from "../../resources";
// import { Dropdown } from "react-native-element-dropdown";
import TextInputComponent from "../../components/TextInputComponent";
import { GENDER } from "../../resources/Strings";

const PersonalDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");

  const data = GENDER;
  return (
   <SafeAreaView style={{ flex: 1 }}>
         <KeyboardAvoidingView
           style={{ flex: 1 }}
           behavior={Platform.OS === "ios" ? "padding" : "height"} // Ensure proper keyboard behavior based on platform
         >
           <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
             <LinearGradient
               colors={["#FFD02B", "#FFFFFF", "#FFFFFF", "#FFF8DE"]} // Define your gradient colors here
               style={{
                 flex: 1,
                 padding: SIZES.padding,
                 alignItems: "center",
                 justifyContent: "center",
                 gap: 20,
               }}
             >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: SIZES.padding,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins-Medium",
              }}
            >
              Personal Details
            </Text>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              resizeMode="contain"
              source={ICONS.PROFILE_ICON}
            ></Image>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "column",
                justifyContent: "space-between",
                // backgroundColor: "green",
                // marginTop: 20,
                marginBottom: 20,
                // marginVertical:'3%',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#5A5A5A",
                  // fontWeight: "500",
                  fontFamily: "Poppins-Regular",
                  marginBottom: 10,
                }}
              >
                Name
              </Text>
              <TextInput
                style={{
                  padding: 5,
                  marginBottom: 10,
                  width: SIZES.width * 0.8,
                  height: 30,
                  backgroundColor: "#FFF1BF",
                  color: COLORS.black,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
                placeholder="Enter your name"
                placeholderTextColor={"#5A5A5A"}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
             <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "column",
                justifyContent: "space-between",
              
                // marginTop: 20,
                marginBottom: 20,
                // marginVertical:'3%',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#5A5A5A",
                  // fontWeight: "500",
                  fontFamily: "Poppins-Regular",
                  marginBottom: 10,
                }}
              >
                Name
              </Text>
              <TextInput
                style={{
                  padding: 5,
                  marginBottom: 10,
                  width: SIZES.width * 0.8,
                  height: 30,
                  backgroundColor: "#FFF1BF",
                  color: COLORS.black,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
                placeholder="Enter your name"
                placeholderTextColor={"#5A5A5A"}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
             <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "column",
                justifyContent: "space-between",
               
                // marginTop: 20,
                marginBottom: 20,
                // marginVertical:'3%',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#5A5A5A",
                  // fontWeight: "500",
                  fontFamily: "Poppins-Regular",
                  marginBottom: 10,
                }}
              >
                Name
              </Text>
              <TextInput
                style={{
                  padding: 5,
                  marginBottom: 10,
                  width: SIZES.width * 0.8,
                  height: 30,
                  backgroundColor: "#FFF1BF",
                  color: COLORS.black,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
                placeholder="Enter your name"
                placeholderTextColor={"#5A5A5A"}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
             <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "column",
                justifyContent: "space-between",
               
                // marginTop: 20,
                marginBottom: 20,
                // marginVertical:'3%',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#5A5A5A",
                  // fontWeight: "500",
                  fontFamily: "Poppins-Regular",
                  marginBottom: 10,
                }}
              >
                Name
              </Text>
              <TextInput
                style={{
                  padding: 5,
                  marginBottom: 10,
                  width: SIZES.width * 0.8,
                  height: 30,
                  backgroundColor: "#FFF1BF",
                  color: COLORS.black,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
                placeholder="Enter your name"
                placeholderTextColor={"#5A5A5A"}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "column",
                justifyContent: "space-between",
             
                // marginTop: 20,
                // marginVertical:'3%',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#5A5A5A",
                  // fontWeight: "500",
                  fontFamily: "Poppins-Regular",
                  marginBottom: 10,
                }}
              >
                Email
              </Text>
              <TextInput
                style={{
                  padding: 5,
                  marginBottom: 10,
                  width: SIZES.width * 0.8,
                  height: 30,
                  backgroundColor: "#FFF1BF",
                  color: COLORS.black,
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
                placeholder="Enter your Email"
                placeholderTextColor={"#5A5A5A"}
                value={email}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            
        
            {/* <Dropdown
          style={{
            width: SIZES.width * 0.8,
            paddingHorizontal: 10,
            height: 50,
            borderWidth: 1,
            marginBottom: 10,
            backgroundColor: COLORS.white,
            borderRadius: 5,
          }}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select Gender"
          value={gender}
          placeholderStyle={{ color: COLORS.black, fontSize: 16 }}
          selectedTextStyle={{ color: COLORS.black, fontSize: 16 }}
          itemTextStyle={{ color: COLORS.gray }}
          onChange={(item) => setGender(item.value)}
        /> */}
          </View>
        </LinearGradient>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
};

export default PersonalDetails;

const styles = StyleSheet.create({});
