import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      items:[]
    },
  },
  reducers: {
    addItem(state,action) {
      state.cart.items.push(action.payload);
    }
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
