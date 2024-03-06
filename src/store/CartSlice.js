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
        state.cartArray = [...state.cartArray, action.payload];
      } else {
        console.log("Product with id", id, "is already in the cart.");
      }
    },
    addQuantity: function (state, action) {
      const id = action.payload;
      const productIndex = state.cartArray.findIndex(product => product.id === id);

      if (productIndex !== -1) {
        state.cartArray[productIndex].quantity++; // Increase the quantity
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
export const { addToCart, addQuantity,clearCart} = cartSlice.actions

export default cartSlice.reducer