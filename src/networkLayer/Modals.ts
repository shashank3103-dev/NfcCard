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

export type {emailRequestBody, VerifyOtpRequestBody, refreshTokenBody};
