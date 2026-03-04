import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AuthState, AuthUser } from './types';
import { cookieStorage } from './cookieStorage';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: AuthUser) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => cookieStorage),
    },
  ),
);
