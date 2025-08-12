import React, { useState } from 'react';
import './App.css';  // Import styles
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const PRODUCTS = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Jeans', price: 40 },
  { id: 3, name: 'Sneakers', price: 60 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Remove product from cart by index
  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>My E-Commerce Store</h1>
      <div className="main-content">
        <ProductList products={PRODUCTS} onAddToCart={addToCart} />
        <ShoppingCart items={cartItems} onRemove={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
