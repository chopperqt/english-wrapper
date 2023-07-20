import { BookOutlined, RedoOutlined } from "@ant-design/icons";

import { Routes } from "../../routes";

export const MenuItems = [
  {
    key: Routes.library,
    label: "Library",
    icon: <BookOutlined />,
  },
  {
    key: Routes.repeater,
    label: "Repeater",
    icon: <RedoOutlined />,
  },
];
