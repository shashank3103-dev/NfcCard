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
  profile_pic?: any;
}
interface ContactFormBody {
  Fullname: string;
  email: string;
  phoneNumber: string;
  message: string;
}
interface createTicketBody {
  query: string;
  Fullname: string;
  email: string;
  message: string;
  phoneNumber: string;
}

export type {
  createTicketBody,
  ContactFormBody,
  emailRequestBody,
  VerifyOtpRequestBody,
  refreshTokenBody,
  userUpdateRequestBody,
};
