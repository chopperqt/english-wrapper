import {
  BarChartOutlined,
  BookOutlined,
  RedoOutlined,
} from "@ant-design/icons";

import { PathRoutes } from "../../routes";

export const MenuItems = [
  {
    key: PathRoutes.library,
    label: "Library",
    icon: <BookOutlined />,
  },
  {
    key: PathRoutes.repeater,
    label: "Repeater",
    icon: <RedoOutlined />,
  },
  {
    key: PathRoutes.statistics,
    label: "Statistics",
    icon: <BarChartOutlined />,
  },
];
