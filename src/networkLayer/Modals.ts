interface emailRequestBody {
  email: string;
}
interface VerifyOtpRequestBody {
  email: string;
  otp_code: string;
}
interface refreshTokenBody {
  refresh: string;
}
interface userUpdateRequestBody {
  fullName?: string;
  phone_number?: string;
  dob?: string;
  address?: string;
  profile_pic?:any;
  
}
interface ContactFormBody {
  Fullname: string;
  email: string;
  phoneNumber: string;
  message: string;
}


export type {
  ContactFormBody,
  emailRequestBody,
  VerifyOtpRequestBody,
  refreshTokenBody,
  userUpdateRequestBody,
};
