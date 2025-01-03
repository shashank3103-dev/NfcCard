// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = 'en_US';
export const kCLIENTVERSION = '1.2.1:' + platform;

export const baseUrl = 'https://kashishpal6.pythonanywhere.com';
// Used for async storage
export const storageKeys = {
  kACCESS_TOKEN: 'access_token',
  kREFRESH_TOKEN: 'refresh_token',
  kEMAIL: 'email',
  kPASSWORD: 'password',
  kPROFILE_IMAGE: 'profileImage',
  kPROFILE_DETAILS: 'profileDetails',
  kDEVICETOKEN: 'deviceToken',
};

export const EndPoints = {
  GETDATAENDPOINT: '/user/login/',
  EMAIL_LOGIN: '/user/login/',
  VERIFY_OTP: '/user/verify-otp/',
  GET_USER_DETAIL: '/getUserDetail',
  UPDATE_USER_DETAIL: '/updateUser',
  REFRESH_ACCESS_TOKEN: '/user/token/refresh/',
  GET_ALL_SERVICES: '/services/listServices/',
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};
