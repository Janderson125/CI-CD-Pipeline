import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList, { Product } from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";

describe("Cart integration", () => {
  const product: Product = {
    id: "1",
    title: "Product 1",
    description: "Description",
    price: 50,
  };

  test("adding product updates cart", () => {
    function Wrapper() {
      const [cartItems, setCartItems] = React.useState<Product[]>([]);
      const addToCart = (product: Product) => setCartItems([...cartItems, product]);

      return (
        <>
          <ProductList products={[product]} addToCart={addToCart} />
          <ShoppingCart items={cartItems} />
        </>
      );
    }

    render(<Wrapper />);

    const addButton = screen.getByText(/add to cart/i);
    fireEvent.click(addButton);

    expect(screen.getByTestId("cart-item-1")).toBeInTheDocument();
    expect(screen.getByText(/\$50/)).toBeInTheDocument();
  });
});
