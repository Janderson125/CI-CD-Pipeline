import React from "react";
import { Product } from "../types";

interface CartProps {
  items: Product[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  if (items.length === 0) {
    return <p>Cart is empty.</p>;
  }

  return (
    <div>
      <h3>Shopping Cart</h3>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span> - <span>${item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
