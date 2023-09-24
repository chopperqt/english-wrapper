import supabase from ".";
import { parse } from "valibot";
import { StatisticsModel, StatisticsSchema } from "../models/statistics.model";
import { setStatistics } from "../stores/statistics.slice";
import { store } from "../stores/store";

export const getStatistics = async (): Promise<StatisticsModel[] | null> => {
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

    const validateData = data.map((statistic) =>
      parse(StatisticsSchema, statistic)
    );

    store.dispatch(setStatistics(validateData));

    return data;
  } catch (_) {
    console.log(_);

    return null;
  }
};
