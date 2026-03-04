import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { useAuthStore } from '@/shared/store';
import type { AuthUser } from '@/shared/store';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));

const mockUser: AuthUser = {
  id: 1,
  username: 'emilys',
  email: 'emily@example.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  image: '',
  accessToken: 'token',
  refreshToken: 'refresh',
};

describe('Header', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null, isAuthenticated: false });
  });

  it('shows Login link when not authenticated', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  });

  it('shows user info and Logout button when authenticated', () => {
    useAuthStore.setState({ user: mockUser, isAuthenticated: true });
    render(<Header />);
    expect(screen.getByText(/Emily Johnson/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });
});
