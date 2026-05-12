 
 import api from "./Axios";

 export const getProfile =
  async (id) => {

  const response =
    await api.get(
      `/profile/get-profile.php?id=${id}`
    );

  return response.data;
};