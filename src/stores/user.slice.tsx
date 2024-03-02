import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  isAuth: boolean;
  isFetched: boolean;
}

const initialState: UserState = {
  id: "",
  isAuth: false,
  isFetched: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, actions: PayloadAction<string>) => {
      state.id = actions.payload;
    },
    setAuth: (state, actions: PayloadAction<boolean>) => {
      state.isAuth = actions.payload;
    },
    setFetched: (state, actions: PayloadAction<boolean>) => {
      state.isFetched = actions.payload;
    },
  },
});

export const {
  setUserId,
  setAuth,
  setFetched,
} = userSlice.actions;

export default userSlice.reducer;
