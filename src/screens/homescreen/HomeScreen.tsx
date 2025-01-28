import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, SIZES } from "../../resources/Theme";
import CommonHeader from "../../components/CommonHeader";
import { ICONS } from "../../resources";
import ServicesCard from "../../components/homeComponent/ServicesCard";
import SearchByIndustryCard from "../../components/homeComponent/SearchByIndustryCard";
import PremiumProductsCard from "../../components/homeComponent/PremiumProductsCard";
import { Service } from "../../stateManagement/models/HomeScreenModel";
import URLManager from "../../networkLayer/URLManager";
import { storageKeys } from "../../resources/Constants";
import { getDataFromEncryptedStorage } from "../../resources/Utilities";
const HomeScreen =  () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  async function fetchUserServices() {
    try {
      setLoading(true); 
      const urlManager = new URLManager();
      const response = await urlManager.getAllServices();
      if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.status}`);
      }
      const data = await response.json();
      console.log(data, "USER SERVICES");
      if (Array.isArray(data)) {
        setServices(data);
      } else if (data?.data?.services) {
        setServices(data.data.services);
      } else {
        console.log("Unexpected data format", data);
        setServices([]); 
      }
    } catch (error) {
      console.error("Error fetching user services:", error);
      Alert.alert("Error",  "Unable to fetch services.");
    } finally {
      setLoading(false); 
    }
  }
  useEffect(() => {
    fetchUserServices();
  }, []);
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <CommonHeader title={""} />
      <LinearGradient
        colors={["#FFF8DE", "#FFFF", "#FFF8DE"]} 
        style={{
          flex: 1,
        }}
      >
        <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
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
                // color: COLORS.black,
                // fontWeight: "700",
                marginHorizontal: "4%",
              }}
            >
              Services
            </Text>
            <Text
              style={{
                ...FONTS.body6,
                color: COLORS.black,
              
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
                data={services || []}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) =>
                  item?.id?.toString() || index.toString()
                }
                renderItem={({ item }) => {
                  if (!item) return null; 
                  return (
                    <TouchableOpacity activeOpacity={1}>
                      <ServicesCard service={item} />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.black,
              // fontWeight: "700",
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
              // fontWeight: "700",
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
              // fontWeight: "400",
              marginHorizontal: "4%",
              marginTop: -10,
              marginVertical: "2%",
            }}
          >
            Take a look on the premium collection of NFC cards
          </Text>
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
                  off: "1000",
                },
                {
                  id: 2,
                  price: 2000.0,
                  name: "Photography",
                  imageSource: ICONS.BUSINESS_CARD,
                  off: "5000",
                },
                {
                  id: 3,
                  price: 3000.0,
                  name: "Clothing",
                  imageSource: ICONS.PREMIUM,
                  off: "4000",
                },
                {
                  id: 4,
                  price: 5000.0,
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
