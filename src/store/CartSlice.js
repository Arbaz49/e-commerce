import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartArray: [],
  },
  reducers: {
    addToCart: function (state, action) {
      const id = action.payload._id;
      const isProductInCart = state.cartArray.some(product => product._id === id);

      if (!isProductInCart) {
        state.cartArray = [...state.cartArray, {...action.payload,quantity:1}];
      } else {
        console.log("Product with id", id, "is already in the cart.");
      }
    },
    addQuantity: function (state, action) {
      const id = action.payload;
      const productIndex = state.cartArray.findIndex(product => product._id === id);

      if (productIndex !== -1) {
        state.cartArray[productIndex].quantity++; // Increase the quantity
      } else {
        console.log("Product with id", id, "does not exist in the cart.");
      }
    },
    removeQuantity: function (state, action) {
      const id = action.payload;
      const productIndex = state.cartArray.findIndex(product => product._id === id);
    
      if (productIndex !== -1) {
        if (state.cartArray[productIndex].quantity > 1) {
          state.cartArray[productIndex].quantity--; // Decrease the quantity
        } else {
          state.cartArray.splice(productIndex, 1);
        }
      } else {
        console.log("Product with id", id, "does not exist in the cart.");
      }
    },
    clearCart:function(state,action){
      state.cartArray=[]
    }


  },
})

// Action creators are generated for each case reducer function
export const { addToCart, addQuantity,clearCart,removeQuantity} = cartSlice.actions

export default cartSlice.reducer