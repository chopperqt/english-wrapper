import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StatisticsModel } from "../models/statistics.model";
import { RootState } from "./store";

export interface StatisticsState {
  statistics: StatisticsModel[];
}

const initialState: StatisticsState = {
  statistics: [],
};

export const StatisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setStatistics: (state, action: PayloadAction<StatisticsModel[]>) => {
      state.statistics = action.payload;
    },
  },
});

export const getStatisticsSelector = createSelector(
  (state: RootState) => state.statistics.statistics,
  (statistics) => statistics
);

export const { setStatistics } = StatisticsSlice.actions;

export default StatisticsSlice.reducer;
