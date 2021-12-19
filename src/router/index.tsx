import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import ProductInfo from '../Products/ProductInfo';
import SignUpContainer from '../SignUp/SignUpContainer';

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/products" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
