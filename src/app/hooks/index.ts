'use client';

import { useEffect } from 'react';
import { useProductsStore } from '../store';
import { fetchProducts } from '../api';

export const useProducts = () => {
  const { products, isLoading, error, setProducts, setLoading, setError } =
    useProductsStore();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(12);
        setProducts(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : 'Failed to load products',
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [setLoading, setError, setProducts]);

  return { products, isLoading, error };
};
