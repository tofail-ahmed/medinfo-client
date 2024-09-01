import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./theme/themeslice";
import userReducer from "./user/userSlice"
import { baseApi } from './baseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme:themeReducer,
    medInfoUser:userReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
})

