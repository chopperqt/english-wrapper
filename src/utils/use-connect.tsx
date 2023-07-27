import { useEffect, useState } from "react";

interface UseConnect {
  broadcast: BroadcastChannel;
  page: number;
}

export const useConnect = ({ broadcast, page }: UseConnect) => {
  const [isConnected, setConnected] = useState(false);
  const [isLogout, setLogout] = useState(false);

  /*
   * Начинаем прослушивать канал.
   */
  useEffect(() => {
    broadcast.onmessage = (event) => {
      console.log("get message from word-library", event.data);

      if (event.data?.isLogout) {
        setLogout(true);

        return;
      }

      if (event.data.isConnected) {
        setConnected(event.data.isConnected);
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
      page,
    });
  }, [isConnected]);
};
