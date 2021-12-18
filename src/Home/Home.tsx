import React, { Fragment, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';

import { Modal, Button, Menu } from 'antd';
import { MailOutlined, DribbbleOutlined, SmileOutlined } from '@ant-design/icons';

const Home = () => {
  const [currentMenuKey, setCurrentMenuKey] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Menu
        onClick={(e) => setCurrentMenuKey(e.key)}
        selectedKeys={[currentMenuKey]}
        mode="horizontal"
      >
        <Menu.Item key="Menu 1" icon={<DribbbleOutlined />}>
          Naviagtion One
        </Menu.Item>

        <Menu.Item key="Menu 2" icon={<MailOutlined />}>
          Naviagtion Two
        </Menu.Item>
        <Menu.Item key="admin" icon={<SmileOutlined />}>
          ADMIN
        </Menu.Item>
        <Menu.Item style={{ marginLeft: 'auto' }}>
          <Button type="primary" onClick={showModal}>
            Login
          </Button>
        </Menu.Item>
      </Menu>
      <Modal
        footer={[
          <Button key="back" onClick={hideModal}>
            cancel
          </Button>,
        ]}
        centered
        title="Welcome! 😀"
        visible={isModalOpen}
        onCancel={hideModal}
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default Home;
