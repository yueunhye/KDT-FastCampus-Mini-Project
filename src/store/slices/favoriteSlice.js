import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload]
    },
  },
})

export const favoriteReducer = favoriteSlice.reducer
export const { addFavorite } = favoriteSlice.actions
