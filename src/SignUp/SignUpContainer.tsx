import React from 'react';
import SignUp from './SignUp';

import axios from 'axios';

const SignUpContainer = () => {
  const onHandleSignUp = async (
    userId: string,
    pwd: string,
    name: string,
    gender: string,
    cbSetError: React.Dispatch<React.SetStateAction<boolean>>,
    cbModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const res = await axios.post(`/signup`, {
      name: name,
      id: userId,
      password: pwd,
      gender: gender,
    });
    if (res.data) {
      cbSetError(false);
      cbModal(true);
    } else {
      cbSetError(true);
    }
  };

  return <SignUp onHandleSignUp={onHandleSignUp} />;
};

export default SignUpContainer;
