import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../resources';

interface BtnProps {
  style: any;
  title: string;
  disabled: any;
  onPress: () => void;
}
const CutomButton = (props: BtnProps) => {
  const {style, title,disabled, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
         disabled={disabled}
      style={[
        {
          backgroundColor: COLORS.primary,
          marginTop: '5%',
          padding: '3%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
        },
        style,
      ]}>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 13,
          fontFamily: 'Poppins-Regular',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CutomButton;

const styles = StyleSheet.create({});