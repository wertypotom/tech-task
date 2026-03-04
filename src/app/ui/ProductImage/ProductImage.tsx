'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ProductImage.module.scss';

interface ProductImageProps {
  src: string;
  alt: string;
}

export const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={styles.image}
      />
    </div>
  );
};
