import URLService from './URLServices';
import {EndPoints, baseUrl} from '../resources/Constants';
import {emailRequestBody, VerifyOtpRequestBody} from './Modals';


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
  updateUserDetail(userDetail: any) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.UPDATE_USER_DETAIL;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, userDetail, 'PUT')
      .then((res: any) => res);
  }
  uploadProfileImage(userDetail: any) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.UPLOAD_USER_IMAGE;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, userDetail, 'POST')
      .then((res: any) => res);
  }
  completeKYC(userDetail: any) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.COMPLETE_KYC;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, userDetail, 'POST')
      .then((res: any) => res);
  }
  updateEmail(userDetail: any) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.ADD_EMAIL;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, userDetail, 'POST')
      .then((res: any) => res);
  }
  verifyEmailOTP(data: VerifyOtpRequestBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.VERIFY_EMAIL_OTP;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
}
