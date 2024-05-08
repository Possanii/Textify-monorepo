import axios from "axios";
import { GetAccessToken } from "../hooks/getAccessToken";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

// Interceptor
axiosClient.interceptors.request.use((config) => {
  const accessToken = GetAccessToken();

  if (accessToken) {
    config.headers.Authorization = "Bearer " + accessToken;
  }

  return config;
});
