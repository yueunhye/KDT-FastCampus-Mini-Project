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
<<<<<<< HEAD
  [favoriteApiSlice.reducerPath]: favoriteApiSlice.reducer,
  [cartApiSlice.reducerPath]: cartApiSlice.reducer,
=======
>>>>>>> 7ab361acd8747d2167fc6586a1f5271f1dd220f3
  user: userReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      logger,
      financeApi.middleware,
<<<<<<< HEAD
      apiSlice.middleware,
      favoriteApiSlice.middleware,
      cartApiSlice.middleware
=======
      apiSlice.middleware
>>>>>>> 7ab361acd8747d2167fc6586a1f5271f1dd220f3
    ])
})

setupListeners(store.dispatch)
