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
  profile_pic?: {
    uri: string;
    type: string;
    name: string;
  };
}

export type {
  emailRequestBody,
  VerifyOtpRequestBody,
  refreshTokenBody,
  userUpdateRequestBody,
};
