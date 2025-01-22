import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, ICONS, SIZES, FONTS, SHADOW_BLUE, SHADOW } from "../resources";
import { DrawerActions, useNavigation } from "@react-navigation/native";
interface CommonHeader {
  title: string;
}
const CommonHeader = (props: CommonHeader) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height:
          Platform.OS == "ios" ? SIZES.height * 0.11 : SIZES.height * 0.08,
        backgroundColor: '#FCD200',
        paddingHorizontal: "5%",
        paddingTop: Platform.OS == "ios" ? "7%" : "0%",
        flexDirection: "row",
        alignItems:'center',
        // ...SHADOW
      }}
    >
      <TouchableOpacity
       onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      
      >
        <Image
          resizeMode="contain"
          style={{ height: 30, width: 30 }}
          source={ICONS.DRAWER}
        />
      </TouchableOpacity>
      <Text
        style={{
          // textAlign: 'center',
          flex: 1,
          marginLeft: 20,
          color: COLORS.white,
          ...FONTS.body3,
          fontWeight: "600",
          marginTop: "7.5%",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
