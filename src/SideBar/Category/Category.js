import React from 'react';
import Input from '../../Components/Input/Input';
import './Category.css';

const Category = ({handleCategory}) => {
  return (
    <div>
      <h2 className="sidebar-title">CATEGORY</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleCategory={handleCategory}
          value="men's clothing"
          title="Men's Clothing"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="jewelery"
          title="Jewelry"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="electronics"
          title="Electronics"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="women's clothing"
          title="Women's Clothing"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category