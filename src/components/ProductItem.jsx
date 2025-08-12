import React from 'react';

export default function ProductItem({ product, addToCart }) {
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
