import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ParamsController } from "../helpers/paramsController";

interface UseConnect {
  broadcast: BroadcastChannel;
  page: number;
}

export const useConnect = ({ broadcast, page }: UseConnect) => {
  const { pathname } = useLocation();

  const [isConnected, setConnected] = useState(false); //NOTE: Отвечает, за установку соединения между обоими приложениями
  const [isLogout, setLogout] = useState(false); //NOTE: Ответчает, за разголирование обоих приложение

  const { setParam } = ParamsController();

  /*
   * Начинаем прослушивать канал.
   */
  useEffect(() => {
    broadcast.onmessage = (event) => {
      const { isLogout, isConnected, page } = event.data;

      if (isLogout) {
        setLogout(true);

        return;
      }

      setConnected(!!isConnected);

      if (page) {
        setParam("page", page);
      }

      // setBroadcastState(event.data);
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

  return {
    isLogout,
    isConnected,
  };
};
