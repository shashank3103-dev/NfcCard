import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SHADOW } from "../resources";
interface TextInputProps {
  placeHolder: string;
  value: string;
  style: any;
  onChange: (text: string) => void;
  editable?: boolean;
}

const TextInputComponent = (props: TextInputProps) => {
  return (
    <View>
      <View
        style={{
          ...props.style,
          // width: '100%',
          height: 50,
          flex: 1,
          alignSelf: "center",
          flexDirection: "row",
          paddingHorizontal: "5%",
          alignItems: "center",
          backgroundColor: COLORS.white,
          marginVertical: "1%",
          borderRadius: 5,
          // borderWidth: 1,
          // borderColor: COLORS.lightGray,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 0.5,
          // ...SHADOW,
        }}
      >
        <TextInput
          editable={props.editable ?? true}
          style={{ flex: 1,
                 color: COLORS.black }}
          placeholder={props.placeHolder}
          value={props.value}
          onChangeText={props.onChange}
          placeholderTextColor={COLORS.gray}
        />
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({});