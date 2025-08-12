import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from '../ProductItem';

test('renders product title and price', () => {
  const product = { id: 1, title: 'Test Product', price: 50 };
  render(<ProductItem product={product} addToCart={() => {}} />);
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/\$50/)).toBeInTheDocument();
});
