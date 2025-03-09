import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFromFavorite: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedState));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;