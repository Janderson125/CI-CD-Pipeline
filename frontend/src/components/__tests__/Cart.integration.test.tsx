// src/components/__tests__/Cart.integration.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "../../pages/Products";  // fixed relative path
import Cart from "../../pages/Cart";          // fixed relative path
import { CartProvider } from "../../contexts/CartContext";  // fixed relative path
import { Product } from "../../types";        // fixed relative path

const mockProducts: Product[] = [
  { id: "1", title: "Test Product", description: "Description", price: 10 },
];

test("renders Products component", () => {
  render(
    <CartProvider>
      <Products products={mockProducts} />
      <Cart />
    </CartProvider>
  );
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
});
