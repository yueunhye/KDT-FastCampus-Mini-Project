import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './api/apiSlice'
import { financeApi } from './api/financeApi'
import { favoriteApiSlice } from './api/favoriteApiSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  [financeApi.reducerPath]: financeApi.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([financeApi.middleware, apiSlice.middleware])
})

setupListeners(store.dispatch)
