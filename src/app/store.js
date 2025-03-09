import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/CartSlice";
import favoriteReducer from "./features/Favorite/FavoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,  
    favorites: favoriteReducer,
  },
});