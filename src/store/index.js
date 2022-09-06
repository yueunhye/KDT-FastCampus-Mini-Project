import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createLogger } from 'redux-logger'
import { apiSlice } from './api/apiSlice'
import { financeApi } from './api/financeApi'
import { favoriteApiSlice } from './api/favoriteApiSlice'
import { cartApiSlice } from './api/cartApiSlice'
import userReducer from './slices/userSlice'

const logger = createLogger()

const rootReducer = combineReducers({
  [financeApi.reducerPath]: financeApi.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [favoriteApiSlice.reducerPath]: favoriteApiSlice.reducer,
  [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  user: userReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      logger,
      financeApi.middleware,
      apiSlice.middleware,
      favoriteApiSlice.middleware,
      cartApiSlice.middleware
    ])
})

setupListeners(store.dispatch)
