import { Navigate } from "react-router-dom";

import { Statistics } from "../pages/statistics";

import Home from "@pages/home";
import Login from "@pages/login";
import Repeater from "@pages/repeater";
import Library from "@pages/library";

export const PathRoutes = {
  home: "/",
  login: "/login",
  library: "/library",
  repeater: "/repeater",
  statistics: "/statistics",
};

export const PrivateRoutes = [
  {
    path: PathRoutes.home,
    element: <Navigate to={PathRoutes.library} />,
  },
  {
    path: PathRoutes.repeater,
    element: <Repeater />,
  },
  {
    path: PathRoutes.library,
    element: <Library />,
  },
  {
    path: PathRoutes.login,
    element: <Navigate to={PathRoutes.library} />,
  },
  {
    path: PathRoutes.statistics,
    element: <Statistics />,
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
  {
    path: PathRoutes.statistics,
    element: <Navigate to={PathRoutes.login} />,
  },
];

export const getRoutes = (isAuth = false) => {
  if (isAuth) {
    return PrivateRoutes;
  }

  return PublicRoutes;
};
