import supabase from ".";
import { parse } from "valibot";
import { StatisticsModel, StatisticsSchema } from "../models/statistics.model";

export const getStatistics = async (): Promise<{
  data: StatisticsModel[];
} | null> => {
  const userId = window.localStorage.getItem("userId");

  if (!userId) {
    return null;
  }

  try {
    const { data } = await supabase
      .from("statistic")
      .select("*")
      .match({ user_id: userId });

    if (!data) {
      return null;
    }

    const formattedData = data.map((statistic) =>
      parse(StatisticsSchema, statistic)
    );

    return { data: formattedData };
  } catch (_) {
    return null;
  }
};
