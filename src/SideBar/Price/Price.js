import React from 'react';
import Input from '../../Components/Input/Input';
import './Price.css';

const Price = ({handleCategory}) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">PRICE RANGE</h2>

        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleCategory={handleCategory}
          value={50}
          title="Under Rs.100"
          name="test2"
        />

        <Input
          handleCategory={handleCategory}
          value={100}
          title="Above Rs.100"
          name="test2"
        />

      </div>
    </>
  );
}

export default Price