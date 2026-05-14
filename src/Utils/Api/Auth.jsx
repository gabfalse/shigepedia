import api from "./Axios";

// ======================
// REGISTER
// ======================
export const registerUser =
  async (data) => {

    const response =
      await api.post(
        "/auth/register.php",
        data
      );

    return response.data;
  };

// ======================
// LOGIN
// ======================
export const loginUser =
  async (data) => {

    const response =
      await api.post(
        "/auth/login.php",
        data
      );

    return response.data;
  };

// ======================
// SEND OTP VERIFICATION
// ======================
export const sendVerification =
  async (data) => {

    const response =
      await api.post(
        "/auth/send-verification.php",
        data
      );

    return response.data;
  };

// ======================
// RESEND OTP
// ======================
export const resendVerification =
  async (data) => {

    const response =
      await api.post(
        "/auth/resend-verification.php",
        data
      );

    return response.data;
  };

// ======================
// VERIFY OTP EMAIL
// ======================
export const verifyEmailOtp =
  async (data) => {

    const response =
      await api.post(
        "/auth/verify-email-otp.php",
        data
      );

    return response.data;
  };

// ======================
// GENERATE TIKTOK CODE
// ======================
export const generateTikTokCode =
  async (data) => {

    const response =
      await api.post(
        "/tiktok/generate-code.php",
        data
      );

    return response.data;
  };

// ======================
// VERIFY TIKTOK
// ======================
export const verifyTikTok =
  async (data) => {

    const response =
      await api.post(
        "/tiktok/verify-tiktok.php",
        data
      );

    return response.data;
  };