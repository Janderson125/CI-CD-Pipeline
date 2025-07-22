import React from "react";
import ProductList, { Product } from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const product: Product = {
    id: "1",
    title: "Product 1",
    description: "Description",
    price: 50,
  };

  const [cartItems, setCartItems] = React.useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>My E-Commerce Store</h1>
      <ProductList products={[product]} addToCart={addToCart} />
      <ShoppingCart items={cartItems} />
    </div>
  );
}

export default App;
