import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import commonReducer from "./common.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
