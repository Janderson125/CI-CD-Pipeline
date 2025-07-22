import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "../store";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";

describe("Cart integration", () => {
  const product = { id: "1", title: "Product 1", description: "Desc", price: 50 };

  test("adding product updates cart", () => {
    function Wrapper() {
      const [cartItems, setCartItems] = React.useState([]);
      const addToCart = (product) => setCartItems([...cartItems, product]);

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

    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/\$50/i)).toBeInTheDocument();
  });
});
