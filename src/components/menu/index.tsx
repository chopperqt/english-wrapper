import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import { MenuItems } from "./constants";
import { useMenu } from "./hooks/use-menu";

interface Props {
  isCollapsed: boolean;
}

export const AppMenu = ({ isCollapsed = false }: Props) => {
  const { defaultValue, handleClickItem } = useMenu();

  return (
    <Sider className="h-screen" trigger={null} collapsed={isCollapsed}>
      <Menu
        theme="dark"
        onClick={(data) => handleClickItem(data.key)}
        items={MenuItems}
        defaultSelectedKeys={[defaultValue]}
      />
    </Sider>
  );
};
