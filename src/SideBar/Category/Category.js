import React, { useState } from 'react';
// import Input from '../../Components/Input/Input';
import './Category.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Category = ({handleCategory}) => {

  const [dropdown,setDropDown] = useState(false);

  return (
    <div className='sidebar-category'>
      <span className="sidebar-title">CATEGORY  </span>
      {!dropdown && (
        <ChevronRightIcon className="arrow" onClick={() => setDropDown(!dropdown)} />)}
        {dropdown && (
          <ExpandMoreIcon className="arrow" onClick={() => setDropDown(!dropdown)} />
        )}

      {dropdown && (
      <div>
        <br/>
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
      )}
    </div>
  );
}

export default Category