import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setCookie, getCookie } from '../../utils/cookie'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

export const userLogin = createAsyncThunk(
  'login/userLogin',
  async ({ email, password }) => {
    try {
      const { data } = axios.post(`${baseUrl}login`, { email, password })
      console.log('user: ', data)
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

const initialState = {
  name: '',
  phoneNumber: '',
  isNotFirst: false,
  modalVisible: false,
  accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openModal(state, action) {
      state.modalVisible = action.payload
    },
    setUser(state, action) {
      Object.keys(action.payload.data).forEach(key => {
        state[key] = action.payload.data[key]
      })
      setCookie(action.payload.data.refreshToken)
    },
    logOut(state) {
      Object.keys(state).forEach(key => {
        state[key] = null
      })
      setCookie(null)
    },
  },
})

export const { openModal, setUser, logOut } = userSlice.actions

export default userSlice.reducer
