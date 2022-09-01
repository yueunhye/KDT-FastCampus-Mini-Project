import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const recommendFetch = createAsyncThunk(
  'recommennd/recommendFetch',
  async () => {
    try {
      const data = axios.get('https://conan.pll0123.com/products/customized')
      console.log('추천상품', data)
      return data
    } catch (error) {
      console.log(error)
    }
  },
)
const initialState = {
  recommendData: [],
  loading: false,
  error: null,
}

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setRecommed(state, action) {
      state.recommendData = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(recommendFetch.pending, state => {
      state.loading = 'true'
    })
    builder.addCase(recommendFetch.fulfilled, (state, action) => {
      const result = action.payload
      state.recommendData = result
      state.loading = 'false'
    })
    builder.addCase(recommendFetch.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = 'false'
    })
  },
})

export const { setRecommed } = recommendSlice.actions
export const recommendReducer = recommendSlice.reducer
