import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import commonReducer from "./common.slice";
import settingsReducer from './settings.slice'

import { api } from "@api/index";

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
    settings: settingsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
