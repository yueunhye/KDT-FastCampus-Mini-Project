import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  status: "",
  loading: false
}

const asyncFetch = createAsyncThunk(
  'searchSlice'/'asyncFetch',
  async(test) => {
    const res = await axios.get(`https://conan.pll0123.com/products?query=${''}&tag=${test}&tag-content=${'자금'}`)
    return console.log(res.data)
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(asyncFetch.pending, (state,action)=>{
      state.loading = true
    })
    builder.addCase(asyncFetch.fulfilled, (state,action)=>{
      state.loading = false
      state.status = action.payload
    })
    builder.addCase(asyncFetch.rejected, (state, action)=>{
      state.loading = false
    })
  }
})

export default searchSlice
export { asyncFetch }

//transformResponse??

// 객체데이터가 바디에 객체담겨 내용 
// 다른것도 뭐 어쩌구
// 데이터만 받고 싶을때 
// return response.data
// authrization: bearer cookioe
// rtk query는 캐싱을 하고 있다가 캐시값이 바뀔때 요청을 보내게된다
