/** LOGIN PAGE STYLE */

import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    height: 100,
    width: '70%',
    resizeMode: 'contain',
    marginHorizontal: 20,
    tintColor: COLORS.primary,
  },

  rowMenu: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingStart: 20,
  },

  menuText: {
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: '500',
    color: COLORS.black,
    marginStart: 20,
  },

  versionText: {
    fontSize: 14,
    textAlign: 'justify',
    fontWeight: '500',
    color: COLORS.black,
    marginStart: 40,
  },

  bottomMenuText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: COLORS.black,
  },

  textMargin: {
    marginLeft: 0,
  },

  bottomTextMargin: {
    marginLeft: 10,
    marginTop: 5,
  },

  horizontalLine: {
    backgroundColor: '#191919',
    height: 0.5,
    width: 220,
    opacity: 0.2,
  },

  bottomRow: {
    left: 35,
  },

  usernameAlign: {
    margin: 10,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    borderRadius: 5,
    padding: 10,
  },

  username: {
    fontSize: 16,
    color: COLORS.black,
  },

  sideMenuBg: {
    backgroundColor: COLORS.white,
    flex: 0.1,
    opacity: 0.8,
  },
});

export default styles;
