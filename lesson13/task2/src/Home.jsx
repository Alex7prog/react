import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page__content">
      <h1>🏠</h1>
      {/* <a href="/products">To products</a> */}
      <Link to="/products">To products</Link>
    </div>
  );
};

export default Home;
