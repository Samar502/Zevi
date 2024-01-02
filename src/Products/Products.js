import React from 'react';
import './Products.css';
import Card from '../Components/Card/Card';

const Products = ({result}) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  )
}

export default Products