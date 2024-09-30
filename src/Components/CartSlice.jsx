import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
 };


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    //Reducer 1
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    // Reducer 2
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    // Reducer 3
    clearCart(state) {
      state.cartItems = [];
    },
    // Reducer 4
    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    // Reducer 5
    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
},
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;

