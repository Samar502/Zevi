import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import './SideBar.css';
import Ratings from './Ratings/Ratings';

const SideBar = ({handleCategory, handlePriceRange, handleRating}) => {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar-inner">
        <div className="logo-container">
          <h3>Search Results</h3>
        </div>
        <Category handleCategory={handleCategory} />
        <Price handlePriceRange={handlePriceRange} />
        <Ratings handleRating={handleRating} />
        </div>
      </section>
    </>
  )
}

export default SideBar