import { useNavigate } from "react-router-dom";

export const useSideNavBar = () => {
  const navigate = useNavigate();

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  return {
    handleClickItem,
  };
};
