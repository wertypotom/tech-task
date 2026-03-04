import { useProductsStore } from './products.store';
import type { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Test Product',
    category: 'test',
    price: 9.99,
    thumbnail: 'img.jpg',
  },
];

describe('useProductsStore', () => {
  beforeEach(() => {
    useProductsStore.setState({ products: [], isLoading: false, error: null });
  });

  it('initializes with empty state', () => {
    const { products, isLoading, error } = useProductsStore.getState();
    expect(products).toEqual([]);
    expect(isLoading).toBe(false);
    expect(error).toBeNull();
  });

  it('sets products', () => {
    useProductsStore.getState().setProducts(mockProducts);
    expect(useProductsStore.getState().products).toEqual(mockProducts);
  });

  it('sets loading state', () => {
    useProductsStore.getState().setLoading(true);
    expect(useProductsStore.getState().isLoading).toBe(true);
  });

  it('sets error state', () => {
    useProductsStore.getState().setError('API error');
    expect(useProductsStore.getState().error).toBe('API error');
  });
});
