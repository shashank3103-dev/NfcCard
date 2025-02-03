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
  RefreshControl,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS } from "../../resources/Theme";
import CommonHeader from "../../components/CommonHeader";
import { ICONS } from "../../resources";
import ServicesCard from "../../components/homeComponent/ServicesCard";
import SearchByIndustryCard from "../../components/homeComponent/SearchByIndustryCard";
import PremiumProductsCard from "../../components/homeComponent/PremiumProductsCard";
import {
  Banner,
  Product,
  Service,
} from "../../stateManagement/models/HomeScreenModel";
import URLManager from "../../networkLayer/URLManager";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [services, setServices] = useState<Service[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [banner, setBanner] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  async function fetchProductsDetailApi() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getAllProducts()
        .then((res) => {
          return res.json() as Promise<any>;
        })
        .then(async (data: any) => {
          const premiumProducts = Array.isArray(data)
            ? data.filter((product) => product.IsPremium === true)
            : [];
          setProducts(premiumProducts);
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  async function fetchUserServices() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getAllServices()
        .then((res) => {
          return res.json() as Promise<any>;
        })
        .then(async (data: any) => {
          setServices(data);
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  async function fetchHomeBanners() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getAllBanners()
        .then((res) => {
          return res.json() as Promise<any>;
        })
        .then(async (data: any) => {
          console.log(data, "BANNERS");
          setBanner(data);
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (banner.length > 0) {
        const nextIndex = (currentIndex + 1) % banner.length;
        setCurrentIndex(nextIndex);
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, banner]);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await Promise.all([
        fetchUserServices(),
        fetchProductsDetailApi(),
        fetchHomeBanners(),
      ]);
    } catch (error) {
      console.error("Refresh failed:", error);
    } finally {
      setRefreshing(false);
    }
  }, []);
  useEffect(() => {
    fetchHomeBanners();
    fetchUserServices();
    fetchProductsDetailApi();
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
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[COLORS.primary]}
            />
          }
        >
          <FlatList
            ref={flatListRef}
            data={banner}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) =>
              item.id?.toString() || index.toString()
            }
            pagingEnabled
            scrollEventThrottle={16}
            getItemLayout={(data, index) => ({
              length: width - 20,
              offset: (width - 20) * index,
              index,
            })}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }} // 🔥 Ensure `image` key exists in your API response
                style={{
                  width: width - 20,
                  height: 150,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            )}
          />
          {/* <View>
            <Image
              style={{
                width: "100%",
                height: 130,
              }}
              resizeMode="contain"
              source={ICONS.BANNER}
            ></Image>
          </View> */}
          <View>
            <Text
              style={{
                ...FONTS.body4,
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
              data={products}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity activeOpacity={1}>
                    <PremiumProductsCard products={item} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({});
