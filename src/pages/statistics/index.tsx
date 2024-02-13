import StatisticsApp from "remoteApp/App";

import { useStatistics } from './hooks/use-statistics'

export const Statistics = () => {
  const {
    apiData,
    isLoading,
  } = useStatistics()

  return (
    <div className="m-[20px]">
      <StatisticsApp
        isLoading={isLoading}
        data={apiData}
      />
    </div>
  );
};
