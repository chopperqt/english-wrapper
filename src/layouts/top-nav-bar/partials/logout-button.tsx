import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";

import { logout } from "../../../api/auth.api";
import { setAuth } from "../../../stores/user.slice";

const LOGOUT_TEXT = 'Выход'

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClickLogout = async () => {
    await logout();

    dispatch(setAuth(false));
  };

  return (
    <Button
      className="flex items-center"
      size="small"
      icon={<LogoutOutlined />}
      type="ghost"
      onClick={handleClickLogout}
    >
      {LOGOUT_TEXT}
    </Button>
  );
};
