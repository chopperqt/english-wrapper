import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  isCollapsed: boolean;
}

const initialState: CommonState = {
  isCollapsed: true,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCollapse: (state, actions: PayloadAction<boolean>) => {
      state.isCollapsed = actions.payload;
    },
  },
});

export const { setCollapse } = commonSlice.actions;

export default commonSlice.reducer;
