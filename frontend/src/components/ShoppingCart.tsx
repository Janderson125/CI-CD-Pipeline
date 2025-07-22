import React from "react";
import { Product } from "./ProductList";

interface ShoppingCartProps {
  items: Product[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>No items in cart</p>}
      {items.map((item) => (
        <div key={item.id} data-testid={`cart-item-${item.id}`}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
