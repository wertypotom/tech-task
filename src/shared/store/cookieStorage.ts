import Cookies from 'js-cookie';
import type { StateStorage } from 'zustand/middleware';

const COOKIE_OPTIONS = {
  expires: 7, // 7 days
  sameSite: 'strict' as const,
  secure: process.env.NODE_ENV === 'production',
};

export const cookieStorage: StateStorage = {
  getItem: (name) => Cookies.get(name) ?? null,
  setItem: (name, value) => Cookies.set(name, value, COOKIE_OPTIONS),
  removeItem: (name) => Cookies.remove(name),
};
