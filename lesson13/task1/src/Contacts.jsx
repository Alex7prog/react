import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="page__content">
      <h1>Contacts</h1>
      <p>We are here 🗺</p>
      {/* <a href="/">Go home</a> */}
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Contacts;
