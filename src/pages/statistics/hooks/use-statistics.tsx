import {
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";

import {
  statisticsApi,
  useGetStatisticsQuery,
} from "../../../stores/statistics.slice";

export const useStatistics = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const {
    data: apiData,
    isLoading,
    isFetching,
  } = useGetStatisticsQuery({
    page,
  });

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    return () => {
      dispatch(statisticsApi.util.resetApiState());
    };
  }, []);

  return {
    page,
    apiData,
    isLoading,
    isFetching,
    handleChangePage,
  };
};
