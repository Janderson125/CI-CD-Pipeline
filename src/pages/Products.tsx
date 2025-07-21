import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductForm from "../components/ProductForm";
import { Product } from "../types";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);  // toggle add form

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList: Product[] = [];
      querySnapshot.forEach(doc => {
        productsList.push({ id: doc.id, ...(doc.data() as Product) });
      });
      setProducts(productsList);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    setIsAdding(false);
    // Optionally refetch products here or update state accordingly
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <div>
      <h1>Products Page</h1>

      {isAdding ? (
        <>
          <h2>Add Product</h2>
          <ProductForm product={null} onSave={handleSave} onCancel={handleCancel} />
        </>
      ) : (
        <>
          <button onClick={handleAddClick}>Add Product</button>
          {loading ? (
            <p>Loading products...</p>
          ) : products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
