import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  isAuth: boolean;
}

const initialState: UserState = {
  id: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, actions: PayloadAction<string>) => {
      state.id = actions.payload;
    },
    setAuth: (state, actions: PayloadAction<boolean>) => {
      state.isAuth = actions.payload;
    },
  },
});

export const { setId, setAuth } = userSlice.actions;

export default userSlice.reducer;
