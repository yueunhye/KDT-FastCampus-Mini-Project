import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { favoriteReducer } from './slices/favoriteSlice'
import { basketReducer } from './slices/basketSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket', 'favorite'],
}

export const rootReducer = combineReducers({
  basket: basketReducer,
  favorite: favoriteReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})
export default store
