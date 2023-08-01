import { Navigate } from "react-router-dom";
import { EnglishLibrary } from "../components/english-library";
import { EnglishRepeater } from "../components/english-repeater";

import Home from "../pages/home";
import Login from "../pages/login";

export const PathRoutes = {
  home: "/",
  login: "/login",
  library: "/app-library",
  repeater: "/app-repeater",
};

export const PrivateRoutes = [
  {
    path: PathRoutes.home,
    element: <Navigate to={PathRoutes.library} />,
  },
  {
    path: PathRoutes.repeater,
    element: <EnglishRepeater />,
  },
  {
    path: PathRoutes.library,
    element: <EnglishLibrary />,
  },
  {
    path: PathRoutes.login,
    element: <Navigate to={PathRoutes.library} />,
  },
];

export const PublicRoutes = [
  {
    path: PathRoutes.home,
    element: <Home />,
  },
  {
    path: PathRoutes.login,
    element: <Login />,
  },
  {
    path: PathRoutes.repeater,
    element: <Navigate to={PathRoutes.login} />,
  },
  {
    path: PathRoutes.library,
    element: <Navigate to={PathRoutes.login} />,
  },
];

export const getRoutes = (isAuth = false) => {
  if (isAuth) {
    return PrivateRoutes;
  }

  return PublicRoutes;
};
