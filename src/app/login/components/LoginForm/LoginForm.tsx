'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Toast } from '@/shared/ui';
import { FormInput } from '../../ui';
import { loginSchema, LoginFormValues } from '../../types';
import { useLogin } from '../../hooks';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { handleLogin, isLoading, error, setError } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    await handleLogin(values.username, values.password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && (
        <Toast message={error} onClose={() => setError(null)} duration={4000} />
      )}

      <h1 className={styles.title}>Login</h1>

      <p className={styles.hint}>
        <strong>Demo credentials:</strong>
        <br />
        Username: <code>emilys</code> | Password: <code>emilyspass</code>
      </p>

      <FormInput
        id="username"
        label="Username"
        type="text"
        placeholder="Username"
        error={errors.username?.message}
        {...register('username')}
      />

      <FormInput
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        {...register('password')}
      />

      <button
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        className={styles.submit}
      >
        {isLoading ? <Loader /> : 'Login'}
      </button>
    </form>
  );
};
