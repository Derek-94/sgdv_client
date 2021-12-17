import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h3>This is home.</h3>
      <p>
        <Link to="/signup">Go to signup</Link>
      </p>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </>
  );
};

export default Home;
