import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { useAuthStore } from '@/shared/store';
import type { AuthUser } from '@/shared/store';

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

describe('Footer', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null, isAuthenticated: false });
  });

  it('renders current year', () => {
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });

  it('does NOT show logged-as when not authenticated', () => {
    render(<Footer />);
    expect(screen.queryByText(/logged as/i)).not.toBeInTheDocument();
  });

  it('shows "Logged as {email}" when authenticated', () => {
    useAuthStore.setState({ user: mockUser, isAuthenticated: true });
    render(<Footer />);
    expect(
      screen.getByText(/logged as emily@example\.com/i),
    ).toBeInTheDocument();
  });
});
