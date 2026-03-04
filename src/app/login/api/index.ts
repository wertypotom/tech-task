import { apiClient } from '@/lib/apiClient';
import type { AuthUser } from '@/shared/store';

export const loginUser = async (
  username: string,
  password: string,
  signal?: AbortSignal,
): Promise<AuthUser> => {
  const { data } = await apiClient.post<AuthUser>(
    '/auth/login',
    {
      username,
      password,
      expiresInMins: 30,
    },
    { signal },
  );
  return data;
};
