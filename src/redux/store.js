import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./theme/themeslice";
import userReducer from "./user/userSlice"
import { baseApi } from './baseApi';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "auth",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme:persistedThemeReducer,
    medInfoUser:persistedUserReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
})

export const persistor = persistStore(store);
