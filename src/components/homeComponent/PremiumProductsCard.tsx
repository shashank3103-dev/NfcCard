import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SHADOW } from "../../resources";
import { SHADOW_RIGHT } from "../../resources/Theme";
// import {defaultShadowNew} from '../../utils/BaseUtils';

// Updated interface to reflect the category data
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
        width: 120,
        height: 150,
        borderRadius: 13,
        backgroundColor: COLORS.homeGray,
        alignItems: "center",
        justifyContent: "center",
        ...style,
        ...SHADOW_RIGHT,
        marginStart: 10,
        marginVertical: 10,
      }}
    >
      <Image
        source={imageSource} // Use the image URL from the API
        resizeMode="contain"
        style={{
                marginTop:10,
          // width: 60,
          width: "75%",
          height: 60,
        }}
      />

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "center",
          width: "75%",
          height: "20%",
          borderWidth: 0.5,
          padding: 1,
          backgroundColor: COLORS.white,
          borderColor: COLORS.lightGray,
          borderRadius: 3,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: COLORS.black,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          ₹ {price}.00
         
        </Text>
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 8,
          color: COLORS.black,
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ServicesCard;
