import React from 'react';
import { LoginForm } from './components';
import styles from './login.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
}
