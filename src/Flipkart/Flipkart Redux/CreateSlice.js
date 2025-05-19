import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
};
const cartSlice = createSlice( {
    name : "Cart",
    initialState, 
    reducers : {
        addTOCart : (state,action) => {
            const item = action.payload;
            const existItem = state.cartItems.find(i => i.id === item.id);

            if (existItem) {
        // Optionally increase quantity
        existItem.quantity = (existItem.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
        },
        
        removeFromCart: (state, action) => {
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
},decreaseQty: (state, action) => {
  const item = state.cartItems.find(i => i.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
  }

    }}
})
export const {addTOCart,removeFromCart,decreaseQty} = cartSlice.actions
export default cartSlice.reducer