import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import axios from 'axios';
import { saveToken } from '../utils/token';

type LoginFormContainerProps = {
  hideModal: () => void;
};

const LoginFormContainer: FunctionComponent<LoginFormContainerProps> = (props) => {
  const { hideModal } = props;

  const navigate = useNavigate();

  const onHandleSubmit = async (
    userId: string,
    pwd: string,
    setLoginFail: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const res = await axios.post('/login', {
        id: userId,
        password: pwd,
      });
      if (res.status === 200) {
        setLoginFail(false);
        saveToken(res.data.token);
        hideModal();
        navigate('/');
      } else {
        setLoginFail(true);
      }
    } catch (e) {
      setLoginFail(true);
      console.log(e);
    }
  };

  return <LoginForm onHandleSubmit={onHandleSubmit} />;
};

export default LoginFormContainer;
