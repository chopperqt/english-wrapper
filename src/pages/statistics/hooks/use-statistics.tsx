import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  statisticsApi,
  useGetStatisticsQuery,
} from "../../../stores/statistics.slice";
import { ParamsController } from "../../../utils/params-controller";

export const useStatistics = () => {
  const dispatch = useDispatch();

  const { getParam } = ParamsController();

  const page = +getParam("page") || 1;

  // const {
  //   data: apiData,
  //   isLoading,
  //   isFetching,
  // } = useGetStatisticsQuery({
  //   page,
  // });

  useEffect(() => {
    return () => {
      dispatch(statisticsApi.util.resetApiState());
    };
  }, []);

  return {
    // apiData,
    // isLoading,
    // isFetching,
  };
};
