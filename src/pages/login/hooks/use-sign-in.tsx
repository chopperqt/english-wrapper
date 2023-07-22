import { useState } from "react";
import { FormInstance } from "antd";

import { login } from "../../../api/auth.api";
import { useMessage } from "../../../utils/use-message";

const SUCCESS_TEXT = "Logged success.";

interface UseSignInProps {
  form: FormInstance<any>;
}

interface LoginForm {
  password: string;
  login: string;
}

export const useSignIn = ({ form }: UseSignInProps) => {
  const { contextHolder, handleShowSuccess } = useMessage();

  const [isDisabled, setDisabled] = useState(false);

  const handleError = () => {
    form.setFields([
      {
        name: "password",
        errors: ["Invalid login credentials"],
        value: "",
      },
    ]);
  };

  const handleSubmit = async (data: LoginForm) => {
    const user = await login(data);

    if (!user) {
      handleError();

      return;
    }

    setDisabled(true);
    handleShowSuccess(SUCCESS_TEXT);
  };

  return {
    contextHolder,
    handleSubmit,
    isDisabled,
  };
};

export default useSignIn;