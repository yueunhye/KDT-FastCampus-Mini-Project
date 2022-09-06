import { createSlice } from '@reduxjs/toolkit'
import { setCookie, removeCookie } from '../../utils/cookie'

const initialState = {
  name: '',
  phoneNumber: '',
  isNotFirst: false,
  modalVisible: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openModal(state, action) {
      state.modalVisible = action.payload
    },
    setUser(state, action) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key]
      })
      console.log(action.payload)
      setCookie({
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      })
    },
    logOut(state) {
      Object.keys(state).forEach(key => {
        state[key] = null
      })
      removeCookie('accessToken')
      removeCookie('refreshToken')
    }
  }
})

export const { openModal, setUser, logOut } = userSlice.actions

export default userSlice.reducer
