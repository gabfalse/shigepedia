import api from "./Axios";

export const registerUser =
  async (data) => {
    const response =
      await api.post(
        "/auth/register.php",
        data
      );

    return response.data;
  };

export const loginUser =
  async (data) => {
    const response =
      await api.post(
        "/auth/login.php",
        data
      );

    return response.data;
    
  };

  export const sendVerification =
  async (data) => {

    const response =
      await api.post(
        "/auth/send-verification.php",
        data
      );

    return response.data;
  };

 