import { Table } from "antd";
import { useSelector } from "react-redux";

import { getStatisticsSelector } from "../../stores/statistics.slice";
import { StatisticsColumns } from "./constants";

import { useStatistics } from "./hooks/use-statistics";

export const Statistics = () => {
  const statistics = useSelector(getStatisticsSelector);

  const { isLoading } = useStatistics();

  return (
    <div className="m-[20px]">
      <Table
        loading={isLoading}
        dataSource={statistics}
        columns={StatisticsColumns}
        pagination={{
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
};
