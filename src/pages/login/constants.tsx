import { LockOutlined, UserOutlined } from "@ant-design/icons";

export const Fields = {
  login: "login",
  password: "password",
};

type Field = "login" | "password";

type FormFieldsProps = Record<Field, { item: any; input: any }>;

export const FormFields: FormFieldsProps = {
  login: {
    item: {
      label: "Login",
      name: Fields.login,
      rules: [
        {
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          message: "Email is incorrect!",
        },
        {
          required: true,
          message: "This field is required!",
        },
      ],
    },
    input: {
      prefix: <UserOutlined />,
      placeholder: "Type your login",
    },
  },
  password: {
    item: {
      label: "Password",
      name: Fields.password,
      rules: [
        {
          pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
          message: "Password is incorrect!",
        },
        {
          required: true,
          message: "This field is required!",
        },
      ],
    },
    input: {
      placeholder: "Type your password",
      prefix: <LockOutlined />,
    },
  },
};

export const SIGN_IN_TEXT = "Sign in";
export const LOGIN_TEXT = "Login";
export const LINK_TEXT = "Don't have an account yet?";
export const LINE_STYLES = "h-1 bg-black w-full rounded-md opacity-10";
