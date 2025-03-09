import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }

      // Сохраняем корзину в localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }

      // Сохраняем корзину в localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Сохраняем корзину в localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },

  // reducers: {
  //   addToCart(state, action) {
  //     const product = action.payload;
  //     state.items.push(product);
  //   },
  //   removeFromCart(state, action) {
  //     const productId = action.payload;
  //     state.items = state.items.filter((item) => item.id !== productId);
  //   },
  // },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
