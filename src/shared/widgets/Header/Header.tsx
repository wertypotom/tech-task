'use client';

import React from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/shared/store';
import styles from './Header.module.scss';

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Dummy Store</Link>
      </div>
      <nav className={styles.nav}>
        {isAuthenticated ? (
          <div className={styles.userMenu}>
            <span className={styles.username}>
              {user?.username} ({user?.email})
            </span>
            <button onClick={logout} className={styles.logoutBtn}>
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};
