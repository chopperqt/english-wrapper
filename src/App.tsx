import { Routes as AppRoutes, Route, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { AppMenu } from "./components/menu";

import { getRoutes } from "./routes";
import { useEffect, useLayoutEffect, useState } from "react";
import { ParamsController } from "./helpers/paramsController";
import supabase from "./api";

const KEY =
  import.meta.env.VITE_BROADCAST_TOKEN ||
  "1486d598-a83c-4b1c-8e5a-109de3ac586e";

const broadcast = new BroadcastChannel(KEY);

interface BroadcastObject {
  isConnected: boolean;
  search?: string;
}

function App() {
  const location = useLocation();

  const [isFetched, setFetched] = useState(false);
  const [isAuth, setAuth] = useState(false);

  const routes = getRoutes(isAuth);

  const handleCheckUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user?.id) {
      setAuth(true);
    }

    setFetched(true);
  };
  const { setSearch } = ParamsController();

  useLayoutEffect(() => {
    handleCheckUser();
  });

  const [broadcastState, setBroadcastState] = useState<BroadcastObject>({
    isConnected: false,
    search: "",
  });

  useEffect(() => {
    broadcast.onmessage = (event) => {
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
      search: location.search,
    });
  }, [broadcastState.isConnected]);

  /**
   * Обновляем URL основного приложения, если в iframe поменялся роут
   */
  useEffect(() => {
    if (!broadcastState.search) {
      return;
    }

    setSearch(broadcastState.search);
  }, [broadcastState.search]);

  if (!isFetched) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin size="large" tip="Loading" />
      </div>
    );
  }

  return (
    <div className="App flex h-screen">
      {isAuth && <AppMenu />}
      <AppRoutes>
        {routes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
      </AppRoutes>
    </div>
  );
}

export default App;