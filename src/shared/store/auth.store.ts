import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState, AuthUser } from './types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: AuthUser) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'auth-storage' },
  ),
);
