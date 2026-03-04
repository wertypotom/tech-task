'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/shared/store';
import { loginUser } from '../api';
import axios from 'axios';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuthStore();
  const router = useRouter();
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleLogin = async (username: string, password: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    try {
      const user = await loginUser(username, password, controller.signal);
      login(user);
      router.push('/');
    } catch (err: unknown) {
      if (
        axios.isCancel(err) ||
        (err instanceof Error && err.name === 'CanceledError')
      ) {
        return; // Ignore abort errors
      }

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return { handleLogin, isLoading, error, setError };
};
