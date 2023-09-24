import { format } from "date-fns";
export const StatisticsColumns = [
  {
    title: "ID",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "Дата и время прохождения теста",
    key: "created_at",
    dataIndex: "created_at",
    render: (item: string) => (
      <div>{format(new Date(item), "dd.MM.yyyy HH:mm")}</div>
    ),
  },
  {
    title: "Верно",
    key: "correct",
    dataIndex: "correct",
  },
  {
    title: "Ошибок",
    key: "errors",
    dataIndex: "errors",
  },

  // {
  //   title: "Ваш перевод",
  //   key: "enteredWord",
  //   dataIndex: "enteredWord",
  // },
];
