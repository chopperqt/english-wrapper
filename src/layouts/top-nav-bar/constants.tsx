import type { MenuProps } from "antd";

import { LogoutButton } from "./partials/logout-button";

export const dropdownItems: MenuProps["items"] = [
  {
    key: "1",
    label: <LogoutButton />,
  },
];
