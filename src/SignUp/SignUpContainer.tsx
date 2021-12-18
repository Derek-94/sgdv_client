import React from 'react';
import SignUp from './SignUp';

import axios from 'axios';

const SignUpContainer = () => {
  const onHandleSignUp = async (
    userId: string,
    pwd: string,
    name: string,
    gender: string,
    cb: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    console.log(userId, pwd, name, gender);
    const res = await axios.post(`/signup`, {
      name: name,
      id: userId,
      password: pwd,
      gender: gender,
    });

    cb(res.data ? false : true);
  };

  return <SignUp onHandleSignUp={onHandleSignUp} />;
};

export default SignUpContainer;
