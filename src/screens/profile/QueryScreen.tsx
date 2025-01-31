import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SIZES, UTILITIES } from "../../resources";
import CustomButton2 from "../../components/CustomButton2";
import URLManager from "../../networkLayer/URLManager";
import { storageKeys } from "../../resources/Constants";
const QueryScreen = ({ navigation }: any) => {
  const [fullname, setFullName] = useState("");
  const [query, setQuery] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  const fetchEmail = async () => {
    try {
      const storedEmail = await  UTILITIES.getDataFromEncryptedStorage(storageKeys.kEMAIL);
      if (storedEmail) {
        console.log('EMAIL',storedEmail)
        setEmail(storedEmail);
      }
    } catch (error) {
      console.log("Error fetching email from storage:", error);
    }
  };

  fetchEmail();
}, []);
  const handleContactUs = async () => {
    try {
      setLoading(true);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;
      if (
        !fullname.trim() ||
        !email.trim() ||
        !phoneNumber.trim() ||
        !message.trim()
      ) {
        Alert.alert("Error", "Please fill in all required fields.");
        setLoading(false);
        return;
      }
      if (!emailRegex.test(email)) {
        Alert.alert("Error", "Please enter a valid email address.");
        setLoading(false);
        return;
      }
      if (!phoneRegex.test(phoneNumber)) {
        Alert.alert("Error", "Please enter a valid 10-digit phone number.");
        setLoading(false);
        return;
      }
      let urlManager = new URLManager();
      return urlManager
        .createTicket({
          query: query,
          Fullname: fullname,
          email: email,
          phoneNumber: phoneNumber,
          message: message,
        })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (!res.error) {
            console.log(res);
            Alert.alert(
              "Success!!",
              "Your Query has been sent successfully."
            );
            navigation.goBack();
          } else {
            if (res.error) Alert.alert("Error", res.error);
          }
          console.log(res);
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
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <LinearGradient
            colors={["#FFD02B", "#FFFFFF", "#FFFFFF", "#FFF8DE"]}
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
                 Query Form
              </Text>
              <View
                style={{
                  gap: 10,
                }}
              >
                <View
                  style={{
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Name
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      height: 30,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your name"
                    placeholderTextColor={"#5A5A5A"}
                    value={fullname}
                    onChangeText={(text) => setFullName(text)}
                  />
                </View>
                 <View
                  style={{
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Query
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      height: 30,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your query"
                    placeholderTextColor={"#5A5A5A"}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                  />
                </View>
                <View
                  style={{
                    gap: 5,
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Phone
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      height: 30,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your number"
                    placeholderTextColor={"#5A5A5A"}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                  />
                </View>
                <View
                  style={{
                    gap: 5,
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Email
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
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
                    onChangeText={(text) => setEmail(text)}
                //       editable={false}
                  />
                </View>
                <View
                  style={{
                    gap: 5,
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Message
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your message"
                    placeholderTextColor={"#5A5A5A"}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                  />
                </View>
                <CustomButton2
                  style={{
                    width: SIZES.width * 0.8,
                    borderRadius: 5,
                  }}
                  title={loading? 'Sending...':"Send Message"}
               
                  onPress={handleContactUs}
                  disabled={loading}
                />
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default QueryScreen;
const styles = StyleSheet.create({});
