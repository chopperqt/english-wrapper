import React, { Suspense } from 'react';

import { useGetStatisticsQuery } from '../../stores/statistics.slice';
import { emptySplitApi } from '../../stores/store';

import { useStatistics } from './hooks/use-statistics'

const StatisticsApp = React.lazy(() => import("remoteApp/Home"));

export const Statistics = () => {
  const {
    // apiData,
    // isLoading,
  } = useStatistics()

  useGetStatisticsQuery

  return (
    <div className="m-[20px]">
      <Suspense fallback={null}>
        <StatisticsApp
          useGetStatisticsQuery={useGetStatisticsQuery}
          emptySplitApi={emptySplitApi}
        />
      </Suspense>
    </div>
  );
};
