import supabase from ".";
import { parse } from "valibot";
import { StatisticsSchema } from "../models/statistics.model";
import { setStatistics } from "../stores/statistics.slice";
import { store } from "../stores/store";

export const getStatistics = async () => {
  const userId = window.localStorage.getItem("userId");

  if (!userId) {
    return;
  }

  try {
    const { data } = await supabase
      .from("statistic")
      .select("*")
      .match({ user_id: userId });

    if (!data) {
      return;
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
