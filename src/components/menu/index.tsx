import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { MenuItems } from "./constants";

export const AppMenu = () => {
  const navigate = useNavigate();

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  return (
    <Menu
      theme="dark"
      onClick={({ key }) => handleClickItem(key)}
      items={MenuItems}
    />
  );
};
