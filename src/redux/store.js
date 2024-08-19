import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./theme/themeslice"
import { baseApi } from './baseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme:themeReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
})

