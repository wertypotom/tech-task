import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

const mockProduct: Product = {
  id: 1,
  title: 'Test Mascara',
  category: 'beauty',
  price: 9.99,
  thumbnail: 'https://dummyjson.com/icon/1/128',
};

describe('ProductCard', () => {
  it('renders title, category and price', () => {
    render(<ProductCard product={mockProduct} isAuthenticated={false} />);
    expect(screen.getByText('Test Mascara')).toBeInTheDocument();
    expect(screen.getByText('beauty')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });

  it('does NOT show Add to Cart when not authenticated', () => {
    render(<ProductCard product={mockProduct} isAuthenticated={false} />);
    expect(
      screen.queryByRole('button', { name: /add to cart/i }),
    ).not.toBeInTheDocument();
  });

  it('shows Add to Cart when authenticated', () => {
    render(<ProductCard product={mockProduct} isAuthenticated={true} />);
    expect(
      screen.getByRole('button', { name: /Add Test Mascara to cart/i }),
    ).toBeInTheDocument();
  });
});
