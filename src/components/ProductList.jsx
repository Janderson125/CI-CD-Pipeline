import React from 'react';

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <span>{product.name}</span>
          <span>Price: ${product.price}</span>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
