import { useEffect, useState } from "react";

import { getStatistics } from "../../../api/statistics.api";

export const useStatistics = () => {
  const [isLoading, setLoading] = useState(true);

  const handleGetData = async () => {
    setLoading(true);

    await getStatistics();

    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    isLoading,
  };
};
