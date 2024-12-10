interface emailRequestBody {
  email: string;
}
interface VerifyOtpRequestBody {
  email:string;
  otp_code: string;
}

export type {emailRequestBody, VerifyOtpRequestBody};
