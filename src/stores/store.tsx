import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import commonReducer from "./common.slice";
import { statisticsApi } from "./statistics.slice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const statiscReducer = {}

export const createReducer = (asyncReducers = {}) => combineReducers({
  ...asyncReducers,
  ...statiscReducer,
})

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: () => ({}),
})

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(statisticsApi.middleware).concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
