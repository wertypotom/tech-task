import { useProductsStore, Product } from './products.store';

describe('useProductsStore', () => {
  it('should initialize with empty products, not loading, and no error', () => {
    const { products, isLoading, error } = useProductsStore.getState();
    expect(products).toEqual([]);
    expect(isLoading).toBe(false);
    expect(error).toBeNull();
  });

  it('should set products correctly', () => {
    const mockProducts: Product[] = [
      { id: 1, title: 'Test', category: 'Cat', price: 10, thumbnail: 'none' },
    ];
    useProductsStore.getState().setProducts(mockProducts);

    expect(useProductsStore.getState().products).toEqual(mockProducts);
  });

  it('should set loading state', () => {
    useProductsStore.getState().setLoading(true);
    expect(useProductsStore.getState().isLoading).toBe(true);
  });

  it('should set error state', () => {
    useProductsStore.getState().setError('Failed');
    expect(useProductsStore.getState().error).toBe('Failed');
  });
});
