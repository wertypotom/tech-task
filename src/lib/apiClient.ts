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
