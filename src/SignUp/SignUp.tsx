import React, { useState, FunctionComponent } from 'react';
import axios from 'axios';

import { Form, Input, Button, Select, Typography } from 'antd';

import { FormWrapper, LoginTitle } from '../LoginForm/LoginForm';

const { Option } = Select;
const { Text } = Typography;

const SignUp: FunctionComponent = () => {
  const [userId, setUserId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const [errorId, setErrorId] = useState<boolean>(false);

  const handleSubmit = async () => {
    console.log(userId, pwd, name, gender);
    const res = await axios.post(`/signup`, {
      name: name,
      id: userId,
      password: pwd,
      gender: gender,
    });
    console.log(res.data);
    if (res.data) {
      setErrorId(false);
      // 성공 시 리다이렉션.
    } else {
      setErrorId(true);
    }
  };

  return (
    <FormWrapper>
      <LoginTitle level={2}>SignUp</LoginTitle>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 20 }} onFinish={handleSubmit}>
        <Form.Item
          label="username"
          name="username"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input
            name="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="id"
          name="id"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            type="text"
            name="id"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
            onBlur={() => console.log('blured.')}
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
        <Form.Item
          label="gender"
          name="gender"
          rules={[{ required: true, message: 'Please input your gender!' }]}
        >
          <Select defaultValue="choose" onChange={(value) => setGender(value)}>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" type="primary" onSubmit={handleSubmit}>
            submit
          </Button>
        </Form.Item>
      </Form>
      {errorId ? <Text type="danger">😢 Duplicated Id! Try again.</Text> : ``}
    </FormWrapper>
  );
};

export default SignUp;
