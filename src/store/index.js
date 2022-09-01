import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { favoriteReducer } from './slices/favoriteSlice'
import { cartReducer } from './slices/cartSlice'
import { recommendReducer } from './slices/recommendSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorite'],
}

export const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
  recommed: recommendReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})
export default store
