import { Navigate } from "react-router-dom";
import { EnglishLibrary } from "../components/english-library";
import { EnglishRepeater } from "../components/english-repeater";
import SignIn from "../pages/login";

export const PathRoutes = {
  home: "/",
  library: "/app-library",
  repeater: "/app-repeater",
};

export const Routes = [
  {
    path: PathRoutes.home,
    element: <SignIn />,
    isAuth: false,
  },
  {
    path: PathRoutes.home,
    element: <Navigate to={PathRoutes.library} />,
    isAuth: true,
  },
  {
    path: PathRoutes.repeater,
    element: <EnglishRepeater />,
    isAuth: true,
  },
  {
    path: PathRoutes.library,
    element: <EnglishLibrary />,
    isAuth: true,
  },
];

export const getAuthRoutes = (isAuth = false) => {
  return Routes.filter((item) => item.isAuth === isAuth);
};
