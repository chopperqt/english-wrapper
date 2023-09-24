import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import commonReducer from "./common.slice";
import { statisticsApi } from "./statistics.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(statisticsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
