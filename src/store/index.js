import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createLogger } from 'redux-logger'
import { financeApi } from './api/financeApi'

const logger = createLogger()

const rootReducer = combineReducers({
  [financeApi.reducerPath]: financeApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([logger, financeApi.middleware]),
})

setupListeners(store.dispatch)
