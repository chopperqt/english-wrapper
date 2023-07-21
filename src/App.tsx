import { Routes as AppRoutes, Route, useLocation } from "react-router-dom";
import { AppMenu } from "./components/menu";

import { EnglishLibrary } from "./components/english-library";
import { EnglishRepeater } from "./components/english-repeater";
import { Routes } from "./routes";
import { useEffect, useState } from "react";
import { ParamsController } from "./helpers/paramsController";
import SignIn from "./pages/login";

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

  const { setSearch } = ParamsController();

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

  return (
    <div className="App flex h-screen">
      <AppMenu />
      <AppRoutes>
        <Route path="/" element={<SignIn />} />
        <Route path={Routes.repeater} element={<EnglishRepeater />} />
        <Route path={Routes.library} element={<EnglishLibrary />} />
      </AppRoutes>
    </div>
  );
}

export default App;
