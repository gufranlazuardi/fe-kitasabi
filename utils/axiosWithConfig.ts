import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Ensure environment variable is configured
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosWithConfig;
