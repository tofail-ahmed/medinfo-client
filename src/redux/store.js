import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./theme/themeslice"

export const store = configureStore({
  reducer: {
    theme:themeReducer
  },

})

