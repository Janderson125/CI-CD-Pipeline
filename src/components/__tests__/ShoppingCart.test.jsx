import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from '../ShoppingCart';

test('shows empty cart message when no items', () => {
  render(<ShoppingCart cartItems={[]} />);
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
