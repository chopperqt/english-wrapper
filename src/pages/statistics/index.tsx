import { Table } from "antd";

import { StatisticsColumns } from "./constants";
import { useStatistics } from "./hooks/use-statistics";

export const Statistics = () => {
  const { apiData, isLoading, isFetching, page, handleChangePage } =
    useStatistics();

  return (
    <div className="m-[20px]">
      <Table
        loading={isLoading || isFetching}
        dataSource={apiData?.data}
        columns={StatisticsColumns}
        pagination={{
          total: apiData?.count || 1,
          pageSize: 30,
          current: page,
          position: ["bottomCenter"],
          onChange: handleChangePage,
        }}
      />
    </div>
  );
};
