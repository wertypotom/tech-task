'use client';

import React from 'react';
import { ProductCard } from '../ProductCard';
import { useAuthStore } from '@/shared/store';
import type { Product } from '../../types';
import styles from './ProductGrid.module.scss';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const { isAuthenticated } = useAuthStore();

  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </section>
  );
};
