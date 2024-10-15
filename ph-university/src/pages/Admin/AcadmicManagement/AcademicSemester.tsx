import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { useState } from "react";

import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicManagementData, TQueryParams } from "../../../types";
export type TTableData = Pick<
  TAcademicManagementData,
  "name" | "_id" | "year" | "startMonth" | "endMonth"
>;

const columns: TableColumnsType<TTableData> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "year",
    dataIndex: "year",
    filters: [
      {
        text: "2024",
        value: "2024",
      },
      {
        text: "2025",
        value: "2025",
      },
      {
        text: "2026",
        value: "2026",
      },
      {
        text: "2027",
        value: "2027",
      },
    ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
  },
];

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data: semesterData, isLoading } =
    useGetAllAcademicSemesterQuery(params);
  console.log(semesterData);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const tableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    // console.log(filters, extra);
    if (extra.action == "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <Table<TTableData>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
