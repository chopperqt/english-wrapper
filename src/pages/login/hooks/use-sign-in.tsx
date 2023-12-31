import { useState } from "react";
import { FormInstance } from "antd";

import { login } from "../../../api/auth.api";
import { useMessage } from "../../../utils/use-message";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../stores/user.slice";
import supabase from "../../../api";
import { useNavigate } from "react-router-dom";

const SUCCESS_TEXT = "Logged success.";

interface UseSignInProps {
  form: FormInstance<any>;
}

interface LoginForm {
  password: string;
  login: string;
}

export const useSignIn = ({ form }: UseSignInProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setDisabled(true);

    const user = await login(data);

    if (!user) {
      handleError();
      setDisabled(false);

      return;
    }

    handleShowSuccess(SUCCESS_TEXT);

    const session = await supabase.auth.getSession();

    localStorage.setItem("token", session.data.session?.refresh_token || "");

    setTimeout(() => {
      navigate(-1);
      dispatch(setAuth(true));
    }, 2000);
  };

  return {
    contextHolder,
    handleSubmit,
    isDisabled,
  };
};

export default useSignIn;
