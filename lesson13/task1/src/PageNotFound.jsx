import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="page__content">
      <h1>😢</h1>
      {/* <a href="/">Go home</a> */}
      <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound;
