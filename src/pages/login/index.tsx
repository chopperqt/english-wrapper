import { Button, Form, Input, Typography } from "antd";

import { useSignIn } from "./hooks/use-sign-in";
import { FormFields, LOGIN_TEXT } from "./constants";

const { Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const { handleSubmit, contextHolder, isDisabled } = useSignIn({
    form,
  });

  return (
    <div className="w-full flex justify-center items-center h-screen text-center">
      {contextHolder}
      <div className="w-4/5 sm:w-[450px] bg-white p-3 rounded-md">
        <div className="flex justify-center font-bold  items-center text-2xl">
          <Text className="mr-3 ml-3 text-[28px] whitespace-nowrap">
            {LOGIN_TEXT}
          </Text>
        </div>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          className="mt-5"
        >
          <Form.Item {...FormFields.login.item}>
            <Input {...FormFields.login.input} size="large" />
          </Form.Item>
          <Form.Item {...FormFields.password.item}>
            <Input.Password {...FormFields.password.input} size="large" />
          </Form.Item>
          <div className="flex justify-center">
            <Button
              loading={isDisabled}
              htmlType="submit"
              type="primary"
              size="large"
              className="mb-3 mt-3 w-full"
            >
              {LOGIN_TEXT}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
