import { createSlice, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { favoriteReducer } from './slices/favoriteSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket', 'favorite'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const rootReducer = createCombineReducers({
  basket: basketReducer,
  favorite: favoriteReducer,
})

export const store = configureStore({
  reducer: persistedReducer,
})
