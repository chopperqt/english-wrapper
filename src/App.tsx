import {
  Layout,
  Spin,
} from "antd";
import {
  useEffect,
  useMemo,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  Routes as AppRoutes,
  Route,
  useNavigate,
} from "react-router-dom";

import supabase from "./api";
import { SideNavBar } from "./layouts/side-nav-bar";
import {
  getRoutes,
  PathRoutes,
} from "./routes";
import { ParamsController } from "./utils/params-controller";
import { RootState } from "./stores/store";
import {
  setAuth,
  setFetched,
} from "./stores/user.slice";
import { logout } from "./api/auth.api";
import { useConnect } from "./utils/use-connect";
import { TopNavBar } from "./layouts/top-nav-bar";


const KEY =
  import.meta.env.VITE_BROADCAST_TOKEN ||
  "1486d598-a83c-4b1c-8e5a-109de3ac586e";

const broadcast = new BroadcastChannel(KEY);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, isFetched } = useSelector((state: RootState) => state.user);

  const routes = useMemo(() => getRoutes(isAuth), [isAuth]);

  const handleCheckUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user?.id) {
      dispatch(setAuth(true));
    }

    localStorage.setItem("token", session?.refresh_token || "");
    localStorage.setItem("tokenA", session?.access_token || "");

    dispatch(setFetched(true));
  };

  const { getParam } = ParamsController();

  const pageParam = getParam("page");

  const page = pageParam || 1;

  const { isLogout } = useConnect({
    broadcast,
    page: +page,
  });

  useEffect(() => {
    handleCheckUser();
  }, []);

  useEffect(() => {
    if (!isLogout) {
      return;
    }

    logout();
    navigate(PathRoutes.home);
    dispatch(setAuth(false));
  }, [isLogout]);

  if (!isFetched) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin size="large" tip="Welcome" />
      </div>
    );
  }

  return (
    <div className="App flex min-h-screen">
      <Layout>
        {isAuth && <SideNavBar />}
        <Layout>
          {isAuth && <TopNavBar />}
          <AppRoutes>
            {routes.map(({ path, element }, index) => {
              return <Route key={index} path={path} element={element} />;
            })}
          </AppRoutes>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
