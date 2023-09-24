import { useEffect } from "react";

import { getStatistics } from "../../../api/statistics.api";

export const useStatistics = () => {
  useEffect(() => {
    getStatistics();
  }, []);
};
