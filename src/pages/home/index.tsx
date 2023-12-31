import { Button, Typography } from "antd";

import { useHome } from "./hooks/use-home";

const { Text } = Typography;

const BUTTON_TEXT = "Login";

const Home = () => {
  const { handleClickButton } = useHome();

  return (
    <div className="flex flex-col gap-y-[10px] items-center justify-center w-full h-screen bg-white">
      <Text className="relative text-[30px] sm:text-[60px] lg:text-[72px]">
        The <span className="text-indigo-500">simple</span> word library.
      </Text>

      <Button
        className="absolute top-[25px] right-[25px]"
        size="large"
        onClick={handleClickButton}
      >
        {BUTTON_TEXT}
      </Button>
      <div className="text-[12px] fixed bottom-[20px]"></div>
    </div>
  );
};

export default Home;
