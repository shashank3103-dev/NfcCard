import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { COLORS, SHADOW } from '../../resources';
import { Banner } from '../../stateManagement/models/HomeScreenModel';

interface BannerCardProps {
  banner: Banner;
  
}

const BannerCard: React.FC<BannerCardProps> = ({ banner }) => {
  return (
    <View style={[styles.cardContainer]}>
      {banner.image ? (
    
    <ImageBackground
    resizeMode='stretch'
    source={{ uri: banner.image }}
    style={styles.bannerImage}
  >
    {/* <View style={styles.overlay}>
      <Text style={styles.title}>{banner.title}</Text>
      <Text style={styles.description}>{banner.description}</Text>
    </View> */}
  </ImageBackground>
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image Available</Text>
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    // marginBottom: 15,
    marginTop: 10,
    flex:2,
    // width: '100%',
    // height: 150,
    backgroundColor: COLORS.white,
    ...SHADOW, // Optional: Add shadow style if defined in your resources
  },
  bannerImage: {
    // flex:1,
    width: '100%',
    height: 150, // Adjust height as needed
  },
  placeholder: {
   flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  placeholderText: {
    color: COLORS.gray,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 16,
    // width:'50%',
    flex:1,
    color: COLORS.white,
  },
  description: {
    marginTop:8,
    fontSize: 12,
    fontWeight:'200',
    color: COLORS.white,
  },
  overlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
    padding: 10,
  },
});

export default BannerCard
