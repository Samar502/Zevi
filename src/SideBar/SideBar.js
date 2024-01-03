import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import './SideBar.css';
import Ratings from './Ratings/Ratings';

const SideBar = ({handleCategory, handlePriceRange, handleRating}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleCategory={handleCategory} />
        <Price handlePriceRange={handlePriceRange} />
        <Ratings handleRating={handleRating} />
      </section>
    </>
  )
}

export default SideBar