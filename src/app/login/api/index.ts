import axios from 'axios';
import type { AuthUser } from '@/shared/store';

const BASE_URL = 'https://dummyjson.com';

export const loginUser = async (
  username: string,
  password: string,
): Promise<AuthUser> => {
  const { data } = await axios.post<AuthUser>(`${BASE_URL}/auth/login`, {
    username,
    password,
    expiresInMins: 30,
  });
  return data;
};
