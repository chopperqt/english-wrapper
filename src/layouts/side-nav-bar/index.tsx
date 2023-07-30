import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useSelector } from "react-redux";

import { RootState } from "../../stores/store";
import { MenuItems } from "./constants";
import { useSideNavBar } from "./hooks/use-side-nav-bar";

export const SideNavBar = () => {
  const isCollapsed = useSelector(
    (state: RootState) => state.common.isCollapsed
  );

  const { defaultValue, handleClickItem } = useSideNavBar();

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
