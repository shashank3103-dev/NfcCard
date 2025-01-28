import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, SIZES } from "../../resources/Theme";
import { ICONS, UTILITIES } from "../../resources";
import Toast from "react-native-toast-message";

const ProfileScreen = ({ navigation }: any) => {
 
  const showToast = () => {
    Toast.show({
      type: 'info', // 'success', 'error', 'info'
      text1: 'History Selected',
      text2: 'You have tapped the History section.', // Optional
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FFD02B", "#FFFFFF", "#FFFFFF", "#FFF8DE"]} // Define your gradient colors here
        style={{
          flex: 1,
          // padding: SIZES.padding,
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: SIZES.padding,
              flex:1,
            }}
          >
            <Text
              style={{
                // fontSize: 20,
                ...FONTS.h2,
              }}
            >
              Profile
            </Text>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              resizeMode="contain"
              source={ICONS.PROFILE_ICON}
            ></Image>
<TouchableOpacity onPress={showToast}>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.HISTORY}
                ></Image>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                   ...FONTS.body2,
                  }}
                >
                  History
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
               
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
              onPress={() => navigation.navigate("PersonalDetails" as never)}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.PERSONAL_DETAILS}
                ></Image>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    ...FONTS.body2,
                  }}
                >
                  Personal Details
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.ADDRESS}
                ></Image>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                   ...FONTS.body2,
                  }}
                >
                  Address
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </View>
            </View>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.PAYMENT_METHOD}
                ></Image>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                   ...FONTS.body2,
                  }}
                >
                  Payment Method
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </View>
            </View>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.ABOUT}
                ></Image>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                ...FONTS.body2,
                  }}
                >
                  About
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </View>
            </View>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.HELP_SUPPORT}
                ></Image>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                   ...FONTS.body2,
                  }}
                >
                  Help and Support
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </View>
            </View>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "green",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                  source={ICONS.LOGOUT}
                ></Image>
              </View>
              <TouchableOpacity
                style={{
                  width: SIZES.width * 0.65,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
                onPress={() => {
                  UTILITIES.clearEncryptedStorage().then((res) => {
                    navigation.replace("Login");
                  });
                }}
              >
                <Text
                  style={{
                  ...FONTS.body2,
                  }}
                >
                  Log out
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode="contain"
                  source={ICONS.ARROW}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
