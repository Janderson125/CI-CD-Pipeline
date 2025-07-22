import React from "react";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id} data-testid={`product-${p.id}`}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
