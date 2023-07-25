import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";

import { MenuItems } from "./constants";

interface Props {
  isCollapsed: boolean;
}

export const AppMenu = ({ isCollapsed = false }: Props) => {
  const navigate = useNavigate();

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  return (
    <Sider className="h-screen" trigger={null} collapsed={isCollapsed}>
      <Menu
        theme="dark"
        onClick={({ key }) => handleClickItem(key)}
        items={MenuItems}
      />
    </Sider>
  );
};
