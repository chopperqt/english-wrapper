import {
  BarChartOutlined,
  BookOutlined,
  RedoOutlined,
} from "@ant-design/icons";

import { PathRoutes } from "../../routes";

export const MenuItems = [
  {
    key: PathRoutes.library,
    label: "Словарь",
    icon: <BookOutlined />,
  },
  {
    key: PathRoutes.repeater,
    label: "Повторитель",
    icon: <RedoOutlined />,
  },
  {
    key: PathRoutes.statistics,
    label: "Статистика",
    icon: <BarChartOutlined />,
  },
];
