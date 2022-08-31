import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    recommendData: [],
  },
  reducers: {
    setRecommed(state, action) {
      //
    },
  },
})

export const recommendReducer = recommendSlice.reducer
export const { setRecommed } = recommendSlice.actions
