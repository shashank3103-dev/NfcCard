import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { COLORS, ICONS, SHADOW } from "../resources";

interface BtnProps {
  style: any;
  title: string;
  disabled: any;
  onPress: () => void;
}
const CustomButton = (props: BtnProps) => {
  const { style,disabled, title, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
       disabled={disabled}
      style={[
        {
          backgroundColor: COLORS.primary,
          marginTop: "5%",
          padding: "3%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          flexDirection: "row",
          borderRadius: 30,
          ...SHADOW,
        },
        style,
      ]}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 14,
          fontWeight: "bold",
          position: "absolute",
        }}
      >
        {title}
      </Text>

      <Image
        style={{
          width: 30,
          height: 30,
          marginStart: 200,
        }}
        resizeMode="contain"
        source={ICONS.RIGHT_ARROW}
      ></Image>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
