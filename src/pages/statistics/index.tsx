import React, { Suspense } from 'react';

import { api } from "@api";

const StatisticsApp = React.lazy(() => import("remoteApp/Home"));

export const Statistics = () => (
  <div className="m-[20px]">
    <Suspense fallback={null}>
      <StatisticsApp api={api} />
    </Suspense>
  </div>
);
