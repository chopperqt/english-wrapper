import { parse } from "valibot";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { StatisticsModel, StatisticsSchema } from "../models/statistics.model";

import supabase from "../api";
import { getPagination } from "../utils/get-pagination";

export interface StatisticsState {
  statistics: StatisticsModel[];
}

export const statisticsApi = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getStatistics: builder.query({
      queryFn: async ({ page = 1 }: { page: number }) => {
        const userId = window.localStorage.getItem("userId");

        const { from, to } = getPagination(page, 30);

        const { data, error, count } = await supabase
          .from("statistic")
          .select("*", { count: "exact" })
          .range(from, to)
          .match({ user_id: userId });

        if (error) {
          throw error;
        }

        const formattedData = data.map((item) => parse(StatisticsSchema, item));

        return { data: { data: formattedData, count } };
      },
    }),
  }),
});

export const { useGetStatisticsQuery } = statisticsApi;
