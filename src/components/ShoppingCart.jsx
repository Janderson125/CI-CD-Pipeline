import React from 'react';

export default function ShoppingCart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart ({items.length})</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => onRemove(index)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}
