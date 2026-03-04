import axios from 'axios';
import { useAuthStore } from '@/shared/store';

const BASE_URL = process.env.NEXT_PUBLIC_DUMMYJSON_BASE_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_DUMMYJSON_BASE_URL is not defined');
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user?.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    let errorMessage = 'An unexpected error occurred. Please try again.';

    if (!error.response) {
      errorMessage =
        'Unable to connect to the server. Please check your internet connection.';
    } else {
      const { status } = error.response;
      if (status === 401 || status === 403) {
        errorMessage = 'Authentication failed. Please check your credentials.';
      } else if (status === 404) {
        errorMessage = 'The requested resource was not found.';
      } else if (status >= 500) {
        errorMessage = 'A server error occurred. Please try again later.';
      } else if (error.response.data?.message) {
        errorMessage = error.response.data.message;
      }
    }

    return Promise.reject(new Error(errorMessage));
  },
);
