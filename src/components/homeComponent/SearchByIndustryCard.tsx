import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SHADOW } from "../../resources";
import {
  SHADOW_BLUE,
  SHADOW_BOTTOM_TAB,
  SHADOW_RIGHT,
} from "../../resources/Theme";

interface CategoryProps {
  price: any;
  name: string;
  off: string;
  imageSource: any;
  style?: any; // Optional style prop
}

const ServicesCard: React.FC<CategoryProps> = ({
  name,
  price,
  imageSource,
  style,
  off,
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: 90,
          height: 90,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "center",
          ...style,
          ...SHADOW_RIGHT,
          // gap: 10,
        margin:10,

          // marginEnd: 10,
          marginVertical: 10,
        }}
      >
        <Image
          source={imageSource} // Use the image URL from the API
          resizeMode="contain"
          style={{ width: 70, height: 70 }}
        />
      </View>
      <View>
        <Text
          style={{
            // backgroundColor:'red',
            marginTop: 3,
            fontSize: 10,
            color: COLORS.black,
            textAlign: "center",
            fontFamily: "Poppins-Regular",
            // fontWeight: "400",
            marginBottom: 10,
            //     textDecorationLine: 'line-through',
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

export default ServicesCard;
