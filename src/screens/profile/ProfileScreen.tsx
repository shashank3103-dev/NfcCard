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
import { COLORS, SIZES } from "../../resources/Theme";
import { ICONS } from "../../resources";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FFD02B","#FFFFFF" ,"#FFFFFF", "#FFF8DE"]} // Define your gradient colors here
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
            
            }}
          >
            <Text
              style={{
                fontSize: 20,
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
          
          <View
            style={{
              width: SIZES.width * 0.8,
              height: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "green",
              marginTop:20,
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.8,
              height: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "green",
              marginTop:20,
            }}
            onPress={()=>
              navigation.navigate('PersonalDetails' as never)
            }
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
              marginTop:20,
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
              marginTop:20,
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
              marginTop:20,
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
              marginTop:20,
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
              marginTop:20,
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
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "400",
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
            </View>
          </View>
          
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
