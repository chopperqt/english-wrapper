import React, { Suspense } from 'react';

import { api } from "@api/index";

const StatisticsApp = React.lazy(() => import("StatisticsApp/Home"));

export const Statistics = () => (
  <div className="m-[20px]">
    <Suspense fallback={null}>
      <StatisticsApp api={api} />
    </Suspense>
  </div>
);
