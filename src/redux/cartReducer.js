import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if we have the product in the basket first
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        // increase puantity as product already in basket
        item.quantity += action.payload.quantity;
      } else {
        // add new product to basket
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      // send product id as a payload action, then filter out products being removed from the cart
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
