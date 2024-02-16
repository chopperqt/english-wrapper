import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ParamsController } from "../utils/params-controller";

interface UseConnect {
  broadcast: BroadcastChannel;
  page: number;
}

export const useConnect = ({ broadcast, page }: UseConnect) => {
  const { pathname } = useLocation();

  // const { setPathname } = ParamsController();

  /**
   * NOTE: Отвечает за установку соединения между приложением
   */
  const [isConnected, setConnected] = useState(false);
  /**
   * NOTE: Статус разлогирования приложений
   */
  const [isLogout, setLogout] = useState(false);

  /*
   * Начинаем прослушивать канал.
   */
  useEffect(() => {
    broadcast.onmessage = (event) => {
      const { isLogout, isConnected, page, pathname } = event.data;

      if (isLogout) {
        setLogout(true);

        return;
      }

      setConnected(!!isConnected);

      // if (page) {
      //   setPathname(pathname, { page });
      // }
    };
  }, []);

  /*
   * Отправка данных в приложение Б.
   */
  useEffect(() => {
    if (!isConnected) {
      return;
    }

    broadcast.postMessage({
      initialPage: page,
    });
  }, [isConnected]);

  useEffect(() => {
    setConnected(false);
  }, [pathname]);

  console.log("location ", pathname);

  return {
    isLogout,
    isConnected,
  };
};
