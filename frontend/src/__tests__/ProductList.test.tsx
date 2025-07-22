import React from "react";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div>
      {products.length === 0 && <p>No products available.</p>}
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
