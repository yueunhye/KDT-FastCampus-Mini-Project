import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  favorite: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      console.log(action.payload)
      state.favorite = [...state.favorite, action.payload]
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        item => item.id !== action.payload.id,
      )
    },
  },
})

export const favoriteReducer = favoriteSlice.reducer
export const { addFavorite, removeFavorite } = favoriteSlice.actions
