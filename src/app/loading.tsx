import React from 'react';
import { Loader } from '@/shared/ui';
import styles from './page.module.scss';

export default function Loading() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Latest Products</h1>
      <div className={styles.center}>
        <Loader />
      </div>
    </div>
  );
}
