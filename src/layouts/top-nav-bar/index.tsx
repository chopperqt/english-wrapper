import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { useDispatch, useSelector } from "react-redux";

import { setCollapse } from "../../stores/common.slice";

import type { RootState } from "../../stores/store";

interface TopNavBarProps {
  isCollapsed?: boolean;
}

export const TopNavBar = ({ }: TopNavBarProps) => {
  const dispatch = useDispatch();

  const isCollapsed = useSelector(
    (state: RootState) => state.common.isCollapsed
  );

  let icon = <MenuFoldOutlined />;

  if (isCollapsed) {
    icon = <MenuUnfoldOutlined />;
  }

  return (
    <Header>
      <Button
        type="text"
        icon={icon}
        onClick={() => dispatch(setCollapse(!isCollapsed))}
        className="text-[16px] w-[64px] h-[64px] text-white"
        style={{
          color: "#fff",
        }}
      />
    </Header>
  );
};
