import React from 'react';
import { useParams } from 'react-router-dom';

// use an unconventional approach
// React hook - useParams
const Product = () => {
  const { productId } = useParams();
  return <div className="product">{`Product is a ${productId}`}</div>;
};

export default Product;
