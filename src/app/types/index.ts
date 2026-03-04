export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

export interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
