import { format } from "date-fns";
import { parse } from "valibot";
import { StatisticModel, StatisticSchema } from "../../models/statistics.model";

import { WordsModal } from "./partials/words-modal";

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
  {
    title: 'Верные ответы',
    key: "correct_words",
    dataIndex: "correct_words",
    render: (list: string) => {
      if (!list) {
        return null
      }

      const parseList = JSON.parse(list)
      const formattedList = parseList.map((item: StatisticModel) => parse(StatisticSchema, item))

      return (
        <WordsModal list={formattedList} />
      )
    }
  },
  {
    title: 'Ответы с ошибкой',
    key: "error_words",
    dataIndex: "error_words",
    render: (list: string) => {
      if (!list) {
        return null
      }

      const parseList = JSON.parse(list)
      const formattedList = parseList.map((item: StatisticModel) => parse(StatisticSchema, item))

      return (
        <WordsModal list={formattedList} />
      )
    }
  }
];

export const StatisticColumns = [
  {
    title: "Слово",
    key: "word",
    dataIndex: "word",
  },
  {
    title: "Перевод",
    key: "translate",
    dataIndex: "translate",
  },
  {
    title: "Введно",
    key: "enteredWord",
    dataIndex: "enteredWord",
  },
]
