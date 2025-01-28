import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, ICONS, SHADOW } from "../../resources";
import { SHADOW_RIGHT } from "../../resources/Theme";
interface CategoryProps {
  price: any;
  name: string;
  off: string;
  imageSource: any;
  rating?: number;
  style?: any;
}
const VisitingCard: React.FC<CategoryProps> = ({
  name,
  price,
  imageSource,
  rating = 0,
  style,
  off,
}) => {
  const totalStars = 5;
  const [isWishlist, setIsWishlist] = useState(false);
  const toggleWishlist = () => {
    setIsWishlist((prev) => !prev);
  };
  return (
    <View
      style={{
        width: 150,
        borderRadius: 13,
        backgroundColor: COLORS.homeGray,
        alignItems: "center",
        justifyContent: "center",
        ...style,
        ...SHADOW_RIGHT,
        margin: 10,
        padding: 8,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.white,
          borderRadius: 20,
          padding: 2,
          alignSelf: "flex-end",
        }}
        onPress={toggleWishlist}
      >
        {/* <TouchableOpacity onPress={toggleWishlist}> */}
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          resizeMode="contain"
          source={isWishlist ? ICONS.FILLED_HEART : ICONS.UNFILLED_HEART}
        ></Image>
      </TouchableOpacity>

      <Image
        source={imageSource}
        resizeMode="contain"
        style={{
          marginTop: 10,
          width: "75%",
          height: 60,
        }}
      />
      <Image
        style={{
          width: 20,
          height: 20,
        }}
        resizeMode="contain"
        source={ICONS.COLORS}
      ></Image>
      <View
        style={{
          // flex:1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: COLORS.black,
            textAlign: "center",
            fontFamily: "Poppins-Regular",
            textTransform: "capitalize",
          }}
        >
          1 from ₹ {price}.00
        </Text>
        {Array.from({ length: totalStars }, (_, index) => (
          <Image
            key={index}
            style={{
              width: 10,
              height: 10,
              marginHorizontal: 2,
              tintColor: COLORS.primary,
            }}
            resizeMode="contain"
            source={
              index < Number(rating) ? ICONS.FILLED_STAR : ICONS.UNFILLED_STAR
            }
          />
        ))}
      </View>
    </View>
  );
};
export default VisitingCard;
