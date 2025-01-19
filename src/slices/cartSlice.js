import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../components/Data/ProductData";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: productData.slice(0, 4).map((ele) => ({ ...ele, quantity: 1, selected: true }))
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemInCart = state.items.find((ele) => ele.id === item.id);
      if (!itemInCart) {
        state.items.push({ ...item, quantity: 1, selected: true });
      }
    },
    toggleItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.selected = !item.selected;
      }
    },
    changeQuantity: (state, action) => {
      const { id, increment } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + increment); 
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id); 
    }
  },
});

export const { addItem, toggleItem, changeQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
