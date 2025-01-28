import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SIZES } from "../../resources/Theme";
import { ICONS } from "../../resources";
import CustomButton2 from "../../components/CustomButton2";
import { baseUrl, EndPoints, storageKeys } from "../../resources/Constants";
import { getDataFromEncryptedStorage } from "../../resources/Utilities";
import DatePicker from "react-native-date-picker";
import ImageSelectionModal from "../../components/ImagePickerModel";
import URLManager from "../../networkLayer/URLManager";
interface SelectedImage {
  uri: string;
  type: string;
  fileName?: string;
  fileSize?: number;
}
const PersonalDetails = ({ navigation }: any) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getDataFromEncryptedStorage(
        storageKeys.kACCESS_TOKEN
      );
      console.log("Valid ACCESS_TOKEN found:", token);
      setToken(token);
    };
    fetchUserDetailApi();

    fetchToken();
  }, []);
  // const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [currentSelectionImage, setCurrentSelectionImage] = useState(0);
  const [openImagePicker, setOpenImagePicker] = useState(false);

  function handleSelectImage(imageFile: any) {
    if (imageFile?.fileSize && imageFile.fileSize > 2 * 1024 * 1024) {
      Alert.alert("File too large", "Please select an image under 2MB.");
      return;
    }
    setOpenImagePicker(false);
    setSelectedImage(imageFile);
  }
  const formatDate = (dob: string | number | Date) => {
    if (!dob) return "";
    const d = new Date(dob);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const formattedDob = dob ? formatDate(dob) : "";
  async function updateUserProfileDetails() {
    try {
      setLoading(true);
      let body: {
        fullName: string;
        phone_number: string;
        dob: string;
        address: string;
        profile_pic?: {
          uri: string;
          type: string;
          name: string;
        };
      } = {
        fullName: name,
        phone_number: phoneNumber,
        dob: formattedDob,
        address: location,
      };
      if (selectedImage) {
        body.profile_pic = {
          uri: selectedImage.uri,
          type: selectedImage.type || "image/jpeg",
          name: selectedImage.fileName || `profile_${Date.now()}.jpg`,
        };
      }
      console.log("Sending data to API:", JSON.stringify(body));

      let urlManager = new URLManager();
      return urlManager
        .updateUserDetail(body)
        .then((res) => {
          console.log(res);
          return res.json() as Promise<any>;
        })
        .then(async (res: any) => {
          if (!res.success) {
            Alert.alert("Success!!", "Profile Updated successfully");
            navigation.goBack();
          }
          console.log(res, "updated USER DETAIL");
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
  async function fetchUserDetailApi() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getUserDetail()
        .then((res) => {
          console.log(res);
          return res.json() as Promise<any>;
        })
        
        .then(async (res: any) => {
    
          console.log(res, "USER DETAIL");

          if (res.ok) {
            setName(res.fullName ?? "");
            setDob(res.dob ?? "");
            setPhoneNumber(res.phone_number ?? "");
            setLoading(res.address ?? "");
            setSelectedImage({
              uri: res.profile_image ?? "",
              name: "profile Image",
              type: "image",
            });
          }
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          // keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <LinearGradient
            colors={["#FFD02B", "#FFFFFF", "#FFFFFF", "#FFF8DE"]}
            style={{
              flex: 1,
              padding: SIZES.padding,
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: SIZES.padding,
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins-Medium",
                }}
              >
                Personal Details
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    if (!selectedImage) {
                      setCurrentSelectionImage(1);
                      setOpenImagePicker(true);
                    }
                  }}
                  disabled={false}
                >
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 120,
                    }}
                    resizeMode="cover"
                    source={
                      selectedImage && selectedImage?.uri
                        ? { uri: selectedImage?.uri }
                        : ICONS.PROFILE_ICON
                    }
                  ></Image>
                </TouchableOpacity>
                {selectedImage && (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedImage(null);
                    }}
                    style={{
                      position: "absolute",
                      height: 30,
                      left: 90,
                      top: 5,
                      width: 30,
                    }}
                  >
                    <Image
                      source={ICONS.CLOSE}
                      resizeMode="contain"
                      style={{
                        height: 30,
                        top: 5,

                        width: 30,
                        position: "absolute",
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  gap: 10,
                }}
              >
                <View
                  style={{
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Name
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      height: 30,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your name"
                    placeholderTextColor={"#5A5A5A"}
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                </View>

                <View
                  style={{
                    gap: 5,
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Phone
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      height: 30,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your number"
                    placeholderTextColor={"#5A5A5A"}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                  />
                </View>
                <View
                  style={{
                    gap: 5,
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Location
                  </Text>
                  <TextInput
                    style={{
                      padding: 5,
                      width: SIZES.width * 0.8,
                      height: 30,
                      backgroundColor: "#FFF1BF",
                      color: COLORS.black,
                      fontSize: 14,
                      fontFamily: "Poppins-Regular",
                    }}
                    placeholder="Enter your location"
                    placeholderTextColor={"#5A5A5A"}
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                  />
                </View>
                <View
                  style={{
                    gap: 5,
                    width: SIZES.width * 0.8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#5A5A5A",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Date of Birth
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOpenDateModal(true);
                    }}
                  >
                    <Text
                      style={[
                        styles.textStyle,
                        { color: dob ? COLORS.black : "#5A5A5A" },
                      ]}
                    >
                      {dob ? dob.toLocaleDateString() : "Date of Birth"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <CustomButton2
                  style={{
                    width: SIZES.width * 0.8,
                    borderRadius: 5,
                  }}
                  title={"Save Changes"}
                  onPress={updateUserProfileDetails}
                />
              </View>
            </View>
          </LinearGradient>
          <DatePicker
            modal
            mode="date"
            open={openDateModal}
            date={new Date()}
            onConfirm={(date) => {
              setOpenDateModal(false);
              setDob(date);
            }}
            onCancel={() => {
              setOpenDateModal(false);
            }}
          />
          <ImageSelectionModal
            visible={openImagePicker}
            onClose={() => {
              setOpenImagePicker(false);
            }}
            onImageSelected={handleSelectImage}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default PersonalDetails;
const styles = StyleSheet.create({
  textStyle: {
    padding: 5,
    width: SIZES.width * 0.8,
    height: 30,
    backgroundColor: "#FFF1BF",
    color: COLORS.black,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});
