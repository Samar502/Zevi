import React from 'react';
// import Input from '../../Components/Input/Input';
import './Category.css';

const Category = ({handleCategory}) => {
  return (
    <div>
      <h2 className="sidebar-title">CATEGORY</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value=" " name="test" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="men's clothing" name="test" />
          <span className="checkmark" ></span>
           Men's Clothing
        </label>

        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="women's clothing" name="test" />
          <span className="checkmark" ></span>
          Women's Clothing
        </label>

        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="jewelery" name="test" />
          <span className="checkmark" ></span>
          Jewelry
        </label>

        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="electronics" name="test" />
          <span className="checkmark" ></span>
          Electronics
        </label>

      </div>
    </div>
  );
}

export default Category