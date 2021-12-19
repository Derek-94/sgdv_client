import React, { useState, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Button, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

type LoginFormProps = {
  onHandleSubmit: (
    id: string,
    pwd: string,
    cb: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

const LoginForm: FunctionComponent<LoginFormProps> = (props) => {
  const { onHandleSubmit } = props;

  const [userId, setUserId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');

  const [submitState, setSubmitState] = useState<boolean>(false);
  const [loginFail, setLoginFail] = useState<boolean>(false);

  const handleSubmit = async () => {
    onHandleSubmit(userId, pwd, setLoginFail);
    setSubmitState(true);
  };

  return (
    <FormWrapper>
      <LoginTitle level={2}>Login</LoginTitle>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 20 }} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            type="text"
            name="firstname"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            name="pw"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" type="primary" onSubmit={handleSubmit}>
            submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/signup">🤔 Not member yet? Signup.</Link>
      <br />
      {submitState && loginFail ? (
        <Text type="danger">😢 Wrong ID or Password! Try again.</Text>
      ) : (
        ``
      )}
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginTitle = styled(Typography.Title)`
  padding-bottom: 1rem;
`;
