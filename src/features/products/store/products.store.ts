import { create } from 'zustand';

// Assuming basic product shape from DummyJSON
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  setProducts: (products: Product[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  setProducts: (products) => set({ products }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
