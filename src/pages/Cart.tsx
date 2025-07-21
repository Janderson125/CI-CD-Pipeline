// src/pages/Cart.tsx
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "../types";

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = cartContext;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}
      <ul>
        {cartItems.map(({ productId, title, price, quantity }: CartItem) => (
          <li key={productId}>
            <strong>{title}</strong> - ${price.toFixed(2)} x {quantity}
            <button onClick={() => updateQuantity(productId, quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(productId, quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(productId)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
