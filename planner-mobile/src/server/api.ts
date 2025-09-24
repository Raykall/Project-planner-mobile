import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.8:3333",
  timeout: 10000,
})


api.interceptors.request.use(
  (config) => {
    console.log('🚀 Making request to:', (config.baseURL || '') + (config.url || ''));
    console.log('📤 Request data:', config.data);
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('✅ Response received:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', {
      status: error.response?.status,
      message: error.message,
      code: error.code,
      url: error.config?.baseURL + error.config?.url,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);
