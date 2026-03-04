'use client';

import React from 'react';
import { useAuthStore } from '@/shared/store';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { isAuthenticated, user } = useAuthStore();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {year} Dummy Store.
        {isAuthenticated && user && (
          <span className={styles.loggedAs}> Logged as {user.email}</span>
        )}
      </p>
    </footer>
  );
};
