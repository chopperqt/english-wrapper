import { login } from "../../api/auth.api";

import { FormInstance } from "antd";
// import { useMessage } from "helpers/useMessage";
import { useState } from "react";

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
