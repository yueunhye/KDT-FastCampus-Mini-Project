import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { favoriteReducer } from './slices/favoriteSlice'
import { basketReducer } from './slices/basketSlice'
import { productApi } from './apis/productApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import logger from 'redux-logger'

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
  reducer: {
    persistedReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  // 캐싱, 요청 취소, 폴링 등등 유용한 rtk-query의 기능들을 위한 api 미들웨어 추가
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([logger, productApi.middleware]),
})

// 옵셔널, refetchOnFocus/refetchOnReconnect 기능을 위해 필요함
// setupListeners 문서를 참고 - 커스텀을 위한 옵셔널 콜백을 2번째 인자로 받음
setupListeners(store.dispatch)
export default store
