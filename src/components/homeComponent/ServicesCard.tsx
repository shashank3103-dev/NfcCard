import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SHADOW } from "../../resources";
import { Service } from "../../stateManagement/models/HomeScreenModel";

interface ItemProps {
  service: Service; // Use the Service interface here
  style?: any; // Make style optional
}

const ServicesCard: React.FC<ItemProps> = ({
  service, style
}) => {
   const imageSource = service?.image || "https://via.placeholder.com/60";
  const serviceType = service?.type || "Unknown";
  const servicePrice = service?.price !== undefined ? service.price : "N/A";
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
        // marginStart: 10,
        margin:10,
        // marginEnd: 10,
        marginVertical: 10,
      }}
    >
      <Image
        source={{uri: imageSource}} // Use the image URL from the API
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
            fontSize: 8,
            color: COLORS.black,
            textAlign: "center",
            fontFamily:'Poppins-Regular',
            textTransform: "capitalize",
          }}
        >
          {serviceType}
        </Text>
      </View>
      <Text
        style={{
          marginTop: 5,
          fontSize: 7,
          color: COLORS.black,
          textAlign: "center",
          // fontWeight: "400",
          fontFamily:'Poppins-Regular',
        }}
      >
        {`Starting At ₹${servicePrice}`}
      </Text>
 
    </View>
  );
};

export default ServicesCard;
