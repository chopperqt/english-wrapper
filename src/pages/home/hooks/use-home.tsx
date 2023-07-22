import { useNavigate } from "react-router-dom";

import { PathRoutes } from "../../../routes";

export const useHome = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(PathRoutes.login);
  };

  return {
    handleClickButton,
  };
};
