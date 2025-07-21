// src/components/Products.tsx
import React from "react";
import ProductForm from "../components/ProductForm";
import { Product } from "../types";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  // dummy updateQuantity function example, replace with real logic
  const updateQuantity = (id: string, quantity: number) => {
    console.log(`Update product ${id} quantity to ${quantity}`);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button
            onClick={() => {
              if (product.id) updateQuantity(product.id, 1); // added check for id
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
