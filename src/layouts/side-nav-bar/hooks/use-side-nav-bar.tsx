import { useLocation, useNavigate } from "react-router-dom";

import { PathRoutes } from "../../../routes";

export const useSideNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const defaultValue = (location.pathname = PathRoutes.login
    ? PathRoutes.library
    : location.pathname);

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  return {
    handleClickItem,
    defaultValue,
  };
};
