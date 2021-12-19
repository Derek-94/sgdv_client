import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginFormContainer from '../LoginForm/LoginFormContainer';
import getUserInfo from '../utils/getUserInfo';

import { Modal, Button, Menu } from 'antd';
import { MailOutlined, DribbbleOutlined, DropboxOutlined } from '@ant-design/icons';

const Home = () => {
  const navigate = useNavigate();

  const [isLoginState, setIsLoginState] = useState<boolean>(false);
  const [currentMenuKey, setCurrentMenuKey] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
  };

  const onClickHotIssue = () => {
    if (!isLoginState) {
      alert('Only for members!');
    } else {
      navigate('/products');
    }
  };

  const getCurrentUser = useCallback(async () => {
    try {
      const res = await getUserInfo();
      if (!res) {
        return;
      }
      setIsLoginState(true);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getCurrentUser();
  });

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
        <Menu.Item key="Menu 3" icon={<DropboxOutlined />} onClick={onClickHotIssue}>
          Product List
        </Menu.Item>
        <Menu.Item style={{ marginLeft: 'auto' }}>
          {isLoginState ? (
            <Button type="primary" onClick={() => alert('My page coming soon...')}>
              My page
            </Button>
          ) : (
            <Button type="primary" onClick={showModal}>
              Login
            </Button>
          )}
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
        <LoginFormContainer hideModal={hideModal} />
      </Modal>
    </>
  );
};

export default Home;
