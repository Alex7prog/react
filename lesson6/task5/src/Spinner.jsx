import React from 'react';

const Spinner = ({ size }) => {
  // console.log('onVisible: ', onVisible);
  // return onVisible ? <span className="spinner"></span> : null;
  return <span className="spinner" style={{ width: `${size}px`, height: `${size}px` }}></span>;
};

export default Spinner;
