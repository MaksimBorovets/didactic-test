import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { sessionApi } from './apis/sessionAPI'

export const store = configureStore({
  reducer: {
    [sessionApi.reducerPath]: sessionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionApi.middleware),
})

setupListeners(store.dispatch)