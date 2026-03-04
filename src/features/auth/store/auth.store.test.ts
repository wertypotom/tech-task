import { useAuthStore, User } from './auth.store';

describe('useAuthStore', () => {
  it('should initialize with null user and not authenticated', () => {
    const { user, isAuthenticated } = useAuthStore.getState();
    expect(user).toBeNull();
    expect(isAuthenticated).toBe(false);
  });

  it('should set user and authentication status on login', () => {
    const mockUser: User = { id: '1', username: 'test', email: 'test@app.com' };
    useAuthStore.getState().login(mockUser);

    const { user, isAuthenticated } = useAuthStore.getState();
    expect(user).toEqual(mockUser);
    expect(isAuthenticated).toBe(true);
  });

  it('should clear user and status on logout', () => {
    useAuthStore.getState().logout();
    const { user, isAuthenticated } = useAuthStore.getState();
    expect(user).toBeNull();
    expect(isAuthenticated).toBe(false);
  });
});
