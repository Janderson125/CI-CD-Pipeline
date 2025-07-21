import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { Product } from "../types";
import "../styles/ProductForm.css";  // Import the CSS here

interface ProductFormProps {
  product: Product | null;
  onSave: () => void;
  onCancel: () => void;
}

const ProductForm = ({ product, onSave, onCancel }: ProductFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
    } else {
      setTitle("");
      setDescription("");
      setPrice("");
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || price === "" || price <= 0) {
      alert("Please fill out all fields correctly.");
      return;
    }

    try {
      if (product && product.id) {
        const productRef = doc(db, "products", product.id);
        await updateDoc(productRef, {
          title,
          description,
          price,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, "products"), {
          title,
          description,
          price,
          createdAt: serverTimestamp(),
        });
      }
      onSave();
    } catch (error) {
      alert("Error saving product: " + (error as Error).message);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{product ? "Edit Product" : "Add Product"}</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <div className="button-group">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
