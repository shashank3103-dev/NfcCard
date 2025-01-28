import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, ICONS } from "../../resources";

const ShopScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FFF8DE", "#FFFF", "#FFF8DE"]}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Image
              style={{
                width: "100%",
                height: 130,
              }}
              resizeMode="contain"
              source={ICONS.BANNER}
            ></Image>
          </View>
          <View
            style={{
              width: "100%",
              height: 40,
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              backgroundColor: COLORS.homeGray,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              NFC Visiting Cards
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.black,
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
                source={ICONS.FILTER}
              ></Image>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
