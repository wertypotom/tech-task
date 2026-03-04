import type { Product, ProductsApiResponse } from '../types';

const BASE_URL =
  process.env.NEXT_PUBLIC_DUMMYJSON_BASE_URL || 'https://dummyjson.com';

export const fetchProducts = async (limit = 12): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to load products');
  }

  const data: ProductsApiResponse = await res.json();
  return data.products;
};
