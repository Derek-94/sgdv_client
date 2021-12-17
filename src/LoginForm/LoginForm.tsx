import React, { useState, FunctionComponent } from 'react';
import axios from 'axios';

import { Form, Input, Button, Typography } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginForm: FunctionComponent = () => {
  const [useId, setUserId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');

  const handleSubmit = async () => {
    const res = await axios.post(`/login`, {
      id: useId,
      password: pwd,
    });
    console.log(res.data);
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
    </FormWrapper>
  );
};

export default LoginForm;

export const FormWrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginTitle = styled(Typography.Title)`
  padding-bottom: 1rem;
`;
