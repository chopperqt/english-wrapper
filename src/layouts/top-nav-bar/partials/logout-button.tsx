import { useDispatch } from "react-redux";
import { logout } from "../../../api/auth.api";
import { setAuth } from "../../../stores/user.slice";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClickLogout = async () => {
    await logout();

    dispatch(setAuth(false));
  };

  return <button onClick={handleClickLogout}>Sign out</button>;
};
