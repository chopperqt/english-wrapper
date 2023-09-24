import { Table } from "antd";
import { useSelector } from "react-redux";

import { getStatisticsSelector } from "../../stores/statistics.slice";
import { StatisticsColumns } from "./constants";

import { useStatistics } from "./hooks/use-statistics";

export const Statistics = () => {
  const statistics = useSelector(getStatisticsSelector);

  useStatistics();

  return (
    <div>
      <Table dataSource={statistics} columns={StatisticsColumns} />
    </div>
  );
};
