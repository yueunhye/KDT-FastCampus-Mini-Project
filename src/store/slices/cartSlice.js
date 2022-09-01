import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.carts = [...state.carts, action.payload]
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addCart } = cartSlice.actions
