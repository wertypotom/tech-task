import { useAuthStore, AuthUser } from '@/shared/store';

const mockUser: AuthUser = {
  id: 1,
  username: 'test',
  email: 'test@example.com',
  firstName: 'Test',
  lastName: 'User',
  image: '',
  accessToken: 'token',
  refreshToken: 'refresh',
};

describe('useAuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null, isAuthenticated: false });
  });

  it('should initialize with null user and not authenticated', () => {
    const { user, isAuthenticated } = useAuthStore.getState();
    expect(user).toBeNull();
    expect(isAuthenticated).toBe(false);
  });

  it('should set user and authentication status on login', () => {
    useAuthStore.getState().login(mockUser);
    const { user, isAuthenticated } = useAuthStore.getState();
    expect(user).toEqual(mockUser);
    expect(isAuthenticated).toBe(true);
  });

  it('should clear user and status on logout', () => {
    useAuthStore.getState().login(mockUser);
    useAuthStore.getState().logout();
    const { user, isAuthenticated } = useAuthStore.getState();
    expect(user).toBeNull();
    expect(isAuthenticated).toBe(false);
  });
});
