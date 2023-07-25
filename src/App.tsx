import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes as AppRoutes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button, Layout, Spin } from "antd";

import supabase from "./api";
import { AppMenu } from "./components/menu";
import { getRoutes, PathRoutes } from "./routes";
import { ParamsController } from "./helpers/paramsController";
import { RootState } from "./stores/store";
import { setAuth, setFetched } from "./stores/user.slice";
import { logout } from "./api/auth.api";
import { Header } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const KEY =
  import.meta.env.VITE_BROADCAST_TOKEN ||
  "1486d598-a83c-4b1c-8e5a-109de3ac586e";

const broadcast = new BroadcastChannel(KEY);

interface BroadcastObject {
  isConnected: boolean;
  page?: number;
  token?: string;
}

function App() {
  const dispatch = useDispatch();
  const navigage = useNavigate();
  const location = useLocation();

  const [isCollapsed, setCollapsed] = useState(false);

  const { isAuth, isFetched } = useSelector((state: RootState) => state.user);

  const routes = getRoutes(isAuth);

  const handleCheckUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user?.id) {
      dispatch(setAuth(true));
    }

    localStorage.setItem("token", session?.refresh_token || "");

    dispatch(setFetched(true));
  };

  const { setParam, getParam } = ParamsController();

  const pageParam = getParam("page");

  const page = pageParam || 1;

  const [broadcastState, setBroadcastState] = useState<BroadcastObject>({
    isConnected: false,
    page: +page,
  });

  useEffect(() => {
    handleCheckUser();

    broadcast.onmessage = (event) => {
      console.log("egnlish-wrapper-get-message", event.data);

      if (event.data?.isLogout) {
        logout();
        navigage(PathRoutes.home);
        dispatch(setAuth(false));

        return;
      }

      setBroadcastState(event.data);
    };
  }, []);

  /**
   * Отслеживаем, подлюкчение к каналоу iframe
   */
  useEffect(() => {
    if (!broadcastState.isConnected) {
      return;
    }

    broadcast.postMessage({
      sync: true,
      page: +page,
      search: location.search,
    });
  }, [broadcastState.isConnected]);

  /**
   * Обновляем URL основного приложения, если в iframe поменялся роут
   */
  useEffect(() => {
    if (!broadcastState.page) {
      return;
    }

    setParam("page", broadcastState.page.toString());
  }, [broadcastState.page]);

  if (!isFetched) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin size="large" tip="Welcome" />
      </div>
    );
  }

  return (
    <div className="App flex h-screen">
      <Layout>
        {isAuth && <AppMenu isCollapsed={isCollapsed} />}
        <Layout>
          <Header>
            <Button
              type="text"
              icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!isCollapsed)}
              className="text-[16px] w-[64px] h-[64px] text-white"
              style={{
                color: "#fff",
              }}
            />
          </Header>
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
