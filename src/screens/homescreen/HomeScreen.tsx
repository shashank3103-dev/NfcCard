import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, SIZES } from "../../resources/Theme";
import CommonHeader from "../../components/CommonHeader";
// import { Image } from "react-native-reanimated/lib/typescript/Animated";
import { ICONS } from "../../resources";
import ServicesCard from "../../components/homeComponent/ServicesCard";
import SearchByIndustryCard from "../../components/homeComponent/SearchByIndustryCard";
import PremiumProductsCard from "../../components/homeComponent/PremiumProductsCard";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
    
        <CommonHeader title={""} />
        <LinearGradient
          colors={["#FFF8DE", "#FFFF", "#FFF8DE"]} // Define your gradient colors here
          style={{
            flex: 1,
          }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <View>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.black,
                fontWeight: "700",
                marginHorizontal: "4%",
              }}
            >
              Services
            </Text>
            <Text
              style={{
                ...FONTS.body6,
                color: COLORS.black,
                fontWeight: "400",
                marginHorizontal: "4%",
              }}
            >
              Select from various services
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: COLORS.homeGray,
                flex: 1,
              }}
            >
              <FlatList
                data={[
                  {
                    id: 1,
                    price: 30,
                    name: "NFC Business Cards with Vcard",
                    imageSource: ICONS.VCARD,
                    off: "1000",
                  },
                  {
                    id: 2,
                    price: 50,
                    name: "NFC Business Cards Micro Web Page",
                    imageSource: ICONS.BUSINESS_CARD,
                    off: "5000",
                  },
                  {
                    id: 3,
                    price: 221,
                    name: "NFC Menu and Catalogue Cards",
                    imageSource: ICONS.CATALOG,
                    off: "4000",
                  },
                  {
                    id: 4,
                    price: 221,
                    name: "NFC Pet Locks",
                    imageSource: ICONS.KEYCHAIN,
                    off: "3000",
                  },
                ]}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={1}>
                    <ServicesCard
                      name={item.name}
                      price={item.price}
                      off={item.off}
                      imageSource={item.imageSource}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>

          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.black,
              fontWeight: "700",
              marginHorizontal: "4%",
              marginVertical: "2%",
            }}
          >
            Search By Industry
          </Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: COLORS.homeGray,
              flex: 1,
            }}
          >
            <FlatList
              data={[
                {
                  id: 1,
                  price: 30,
                  name: "Writing & Editing",
                  imageSource: ICONS.WRITING,
                  off: "1000",
                },
                {
                  id: 2,
                  price: 50,
                  name: "Photography",
                  imageSource: ICONS.PHOTOGRAPHY,
                  off: "5000",
                },
                {
                  id: 3,
                  price: 221,
                  name: "Clothing",
                  imageSource: ICONS.BUSINESS_CARD,
                  off: "4000",
                },
                {
                  id: 4,
                  price: 221,
                  name: "Travel Agencies ",
                  imageSource: ICONS.CATALOG,
                  off: "3000",
                },
              ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={1}>
                  <SearchByIndustryCard
                    name={item.name}
                    price={item.price}
                    off={item.off}
                    imageSource={item.imageSource}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.black,
              fontWeight: "700",
              marginHorizontal: "4%",
              marginVertical: "2%",
            }}
          >
            Premium Products
          </Text>
          <Text
            style={{
              ...FONTS.body6,
              color: COLORS.black,
              fontWeight: "400",
              marginHorizontal: "4%",
              marginTop:-10,
              marginVertical: "2%",
              
            }}
          >
            Take a look on the premium collection of NFC cards
          </Text>
          <View style={{
              flexDirection: "row",
              flex: 1,
          }}>
           <FlatList
              data={[
                {
                  id: 1,
                  price: 1000.00,
                  name: "Writing & Editing",
                  imageSource: ICONS.PHOTOGRAPHY,
                  off: "1000",
                },
                {
                  id: 2,
                  price: 2000.00,
                  name: "Photography",
                  imageSource: ICONS.BUSINESS_CARD,
                  off: "5000",
                },
                {
                  id: 3,
                  price: 3000.00,
                  name: "Clothing",
                  imageSource: ICONS.PREMIUM,
                  off: "4000",
                },
                {
                  id: 4,
                  price: 5000.00,
                  name: "Travel Agencies ",
                  imageSource: ICONS.CATALOG,
                  off: "3000",
                },
              ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={1}>
                  <PremiumProductsCard
                    name={item.name}
                    price={item.price}
                    off={item.off}
                    imageSource={item.imageSource}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          </ScrollView>
        </LinearGradient>
     
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
