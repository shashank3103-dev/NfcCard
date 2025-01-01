import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SHADOW } from "../../resources";
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
        width: 100,
        height: 130,
        borderRadius: 13,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        ...style,
        borderWidth: 0.5,
        borderColor: COLORS.lightGray,
        marginStart: 10,
        marginVertical: 10,
      }}
    >
      <Image
        source={imageSource} // Use the image URL from the API
        resizeMode="contain"
        style={{ width: 60, height: 60 }}
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
          borderColor: COLORS.lightGray,
          borderRadius: 3,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 7,
            color: COLORS.black,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Text>
      </View>
      <Text
        style={{
          marginTop: 5,
          fontSize: 6,
          color: COLORS.black,
          textAlign: "center",
          fontWeight: "400",
          //     textDecorationLine: 'line-through',
        }}
      >
        {`${off} Starting At ${price}`}
      </Text>
 
    </View>
  );
};

export default ServicesCard;
