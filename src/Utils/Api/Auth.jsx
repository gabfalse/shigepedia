import api from "./Axios";

// REGISTER
export const registerUser = async (data) => {
  const response = await api.post(
    "/auth/register.php",
    data
  );

  return response.data;
};

// LOGIN
export const loginUser = async (data) => {
  const response = await api.post(
    "/auth/login.php",
    data
  );

  return response.data;
};

// SEND VERIFICATION EMAIL
export const sendVerification = async (data) => {
  const response = await api.post(
    "/auth/send-verification.php",
    data
  );

  return response.data;
};

// VERIFY EMAIL (NEW - IMPORTANT)
export const verifyEmail = async (token) => {
  const response = await api.post(
    "/auth/verify-email.php",
    { token }
  );

  return response.data;
};