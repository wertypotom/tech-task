import React from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onReset?: () => void;
  resetLabel?: string;
}

export const ErrorMessage = ({
  title = 'An error occurred',
  message,
  onReset,
  resetLabel = 'Try again',
}: ErrorMessageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>⚠️</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      {onReset && (
        <button className={styles.resetButton} onClick={onReset} type="button">
          {resetLabel}
        </button>
      )}
    </div>
  );
};
