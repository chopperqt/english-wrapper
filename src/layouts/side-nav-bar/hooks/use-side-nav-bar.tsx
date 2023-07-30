import { useLocation, useNavigate } from "react-router-dom";

export const useSideNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  return {
    handleClickItem,
  };
};
