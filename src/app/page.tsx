'use client';

import React from 'react';
import { Loader, ErrorMessage } from '@/shared/ui';
import { ProductGrid } from './components';
import { useProducts } from './hooks';
import styles from './page.module.scss';

export default function HomePage() {
  const { products, isLoading, error } = useProducts();

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Latest Products</h1>

      {isLoading && (
        <div className={styles.center}>
          <Loader />
        </div>
      )}

      {error && (
        <div className={styles.center}>
          <ErrorMessage title="Unable to load products" message={error} />
        </div>
      )}

      {!isLoading && !error && <ProductGrid products={products} />}
    </div>
  );
}
