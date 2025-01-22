/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {COLORS, ICONS} from '../../resources';

const DATA = [
  {
    id: 1,
    title: 'Business Cards',
//     image: ICONS.navHome,
    isSelected: false,
  },
  {
    id: 2,
    title: 'NFC Cards',
//     image: ICONS.nav_profile,
    isSelected: false,
  },
  {
    id: 3,
    title: 'Printing',
//     image: ICONS.nav_astrology,
    isSelected: false,
  },
  {
    id: 4,
    title: 'FAQs',
//     image: ICONS.about_us,
    isSelected: false,
  },
  {
    id: 5,
    title: 'Help & Support',
//     image: ICONS.wishlist,
    isSelected: false,
  },
  {
    id: 6,
    title: 'Policies',
//     image: ICONS.policies,
    isSelected: false,
  },
  {
    id: 7,
    title: 'Help & Support',
//     image: ICONS.help_support,
    isSelected: false,
  },
  
];

const SideMenu = props => {
  const renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity
        style={styles.rowMenu}
        onPress={() => {
          onItemPress(item?.id);
        }}>
      
        <View style={styles.textMargin}>
          <Text style={styles.menuText}>{item?.title}</Text>

        </View>
      </TouchableOpacity>
    </View>
  );

  const onItemPress = title => {
    props.navigation.toggleDrawer();
    switch (title) {
      case 1:
        return props.navigation.navigate('HomeScreen');
      case 2:
        return props.navigation.navigate('UserProfile');
      case 8:
        return props.navigation.navigate('AddCash');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.sideMenuBg} />
   
      <View style={{
        marginBottom: 20,
      // backgroundColor:'red',
      flex: 1, }}>
        <View style={{flex: 1, }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    </View>
  );
};

export default SideMenu;
