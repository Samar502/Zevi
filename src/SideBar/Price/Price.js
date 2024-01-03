import React from 'react';
import Input from '../../Components/Input/Input';
import './Price.css';

const Price = ({handlePriceRange}) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">PRICE RANGE</h2>

        <label className="sidebar-label-container">
          <input onChange={handlePriceRange} type="radio" value="0" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input onChange={handlePriceRange} type="radio" value="1" name="test2" />
          <span className="checkmark"></span>Under Rs.100
        </label>

        <label className="sidebar-label-container">
          <input onChange={handlePriceRange} type="radio" value="2" name="test2" />
          <span className="checkmark"></span>Above Rs.100
        </label>

      </div>
    </>
  );
}

export default Price