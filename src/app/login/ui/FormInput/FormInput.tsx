import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './FormInput.module.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, ...rest }, ref) => {
    return (
      <div className={styles.field}>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';
