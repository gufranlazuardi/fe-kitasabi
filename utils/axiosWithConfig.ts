import axios from "axios";

let bearerToken = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;
  axiosConfig.baseURL = process.env.NEXT_PUBLIC_URL

  return axiosConfig;
});

export default axiosWithConfig;
