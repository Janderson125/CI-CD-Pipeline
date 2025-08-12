import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('adds product to cart updates cart count', () => {
  render(<App />);
  const addButtons = screen.getAllByText(/add to cart/i);
  fireEvent.click(addButtons[0]);
  expect(screen.getByText(/shopping cart \(1\)/i)).toBeInTheDocument();
});
