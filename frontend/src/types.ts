// src/types.ts

export interface Product {
  id?: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
}
