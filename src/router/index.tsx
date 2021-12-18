import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import LoginForm from '../LoginForm/LoginForm';

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
