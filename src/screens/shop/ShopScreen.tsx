import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, ICONS } from "../../resources";
import VisitingCard from "../../components/shopComponent/VisitingCard";
import { DrawerActions } from "@react-navigation/native";
const ShopScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FFF8DE", "#FFFF", "#FFF8DE"]}
        style={{ flex: 1 }}
      >
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
        <View
          style={{
            width: "100%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: COLORS.homeGray,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              NFC Visiting Cards
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.black,
                padding: 2,
                borderRadius: 2,
              }}
               onPress={() =>
                navigation.dispatch(DrawerActions.toggleDrawer("LeftDrawer"))
              }
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
                source={ICONS.FILTER}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <FlatList
              data={[
                {
                  id: 1,
                  price: 1000.0,
                  name: "Writing & Editing",
                  imageSource: ICONS.PHOTOGRAPHY,
                 
                  rating:1,

                },
                {
                  id: 2,
                  price: 2000.0,
                  name: "Photography",
                  imageSource: ICONS.BUSINESS_CARD,
                 
                  rating:5,
                },
                {
                  id: 3,
                  price: 3000.0,
                  name: "Clothing",
                  imageSource: ICONS.PREMIUM,
                
                  rating:4,
                },
                {
                  id: 4,
                  price: 5000.0,
                  name: "Travel Agencies ",
                  imageSource: ICONS.CATALOG,
                
                  rating:1,
                },
              ]}
              numColumns={2}
              contentContainerStyle={{ alignItems: "center" }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }: any) => (
                <TouchableOpacity activeOpacity={1}>
                  <VisitingCard
                    name={item.name}
                    price={item.price}
                    off={item.off}
                    rating={item.rating}
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
export default ShopScreen;
const styles = StyleSheet.create({});
