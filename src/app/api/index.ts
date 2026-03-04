import { apiClient } from '@/lib/apiClient';
import type { Product, ProductsApiResponse } from '../types';

export const fetchProducts = async (limit = 12): Promise<Product[]> => {
  const { data } = await apiClient.get<ProductsApiResponse>('/products', {
    params: { limit },
  });
  return data.products;
};
