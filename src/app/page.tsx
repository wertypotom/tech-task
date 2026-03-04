import React from 'react';
import { ProductGrid } from './components';
import { fetchProducts } from './api';
import styles from './page.module.scss';

export default async function HomePage() {
  const products = await fetchProducts(12);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Latest Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
