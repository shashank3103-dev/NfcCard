import URLService from './URLServices';
import {EndPoints, baseUrl} from '../resources/Constants';
import {
  emailRequestBody,
  refreshTokenBody,
  userUpdateRequestBody,
  VerifyOtpRequestBody,
} from './Modals';

export default class URLManager {
  getData(data: number) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GETDATAENDPOINT + `${data}.json`;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'GET')
      .then((res: any) => res);
  }
  userEmailLogin(data: emailRequestBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.EMAIL_LOGIN;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
  verifyOTP(data: VerifyOtpRequestBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.VERIFY_OTP;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
  getUserDetail() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_USER_DETAIL;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, 'GET')
      .then((res: any) => res);
  }
  updateUserDetail(data: userUpdateRequestBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.UPDATE_PROFILE;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'PATCH')
      .then((res: any) => res);
  }
  refreshAccessToken(data: refreshTokenBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.REFRESH_ACCESS_TOKEN;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
  getAllServices() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_ALL_SERVICES;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, 'GET')
      .then((res: any) => res);
  }
  updateUserDetails(data: any) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.UPDATE_PROFILE;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'PATCH')
      .then((res: any) => res);
  }
}
