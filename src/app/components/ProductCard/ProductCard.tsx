import React from 'react';
import { ProductImage } from '../../ui';
import type { Product } from '../../types';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  isAuthenticated: boolean;
}

export const ProductCard = ({ product, isAuthenticated }: ProductCardProps) => {
  const { title, category, price, thumbnail } = product;

  return (
    <article className={styles.card}>
      <ProductImage src={thumbnail} alt={title} />
      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          {isAuthenticated && (
            <button className={styles.addToCart} type="button">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
