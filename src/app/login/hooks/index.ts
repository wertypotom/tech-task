'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/shared/store';
import { loginUser } from '../api';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await loginUser(username, password);
      login(user);
      router.push('/');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading, error };
};
