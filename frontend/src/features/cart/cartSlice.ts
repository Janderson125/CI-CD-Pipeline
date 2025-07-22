import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    // other reducers like removeFromCart, etc.
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
