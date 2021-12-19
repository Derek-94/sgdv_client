import React, { useState, FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginTitle } from '../LoginForm/LoginForm';

import styled from 'styled-components';
import { Form, Input, Button, Select, Typography, Modal } from 'antd';

const { Option } = Select;
const { Text } = Typography;

type SignUpProps = {
  onHandleSignUp: (
    userId: string,
    pwd: string,
    name: string,
    gender: string,
    cbSetError: React.Dispatch<React.SetStateAction<boolean>>,
    cbModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

const SignUp: FunctionComponent<SignUpProps> = (props) => {
  const { onHandleSignUp } = props;
  const navigate = useNavigate();

  const [userId, setUserId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [errorId, setErrorId] = useState<boolean>(false);

  const handleSubmit = async () => {
    onHandleSignUp(userId, pwd, name, gender, setErrorId, setModalOpen);
  };

  return (
    <>
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
      <Modal
        title="Success!"
        centered
        visible={modalOpen}
        footer={[
          <Button key="ok" onClick={() => navigate('/')}>
            OK
          </Button>,
        ]}
        onCancel={() => navigate('/')}
      >
        <p style={{ textAlign: 'center' }}>
          <Text type="success" strong>
            🥳 Sign up completed! Please login again.
          </Text>
        </p>
      </Modal>
    </>
  );
};

export default SignUp;

const FormWrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
