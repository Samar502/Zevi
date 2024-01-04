import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import './Price.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Price = ({handlePriceRange}) => {

  const [dropdown,setDropDown] = useState(false);

  return (
    <>
      <div className="sidebar-category">
        <br/>
        <div className='price-heading'>
        <span className="sidebar-title price-title">PRICE RANGE  </span>
        {!dropdown && (
        <ChevronRightIcon className="arrow" onClick={() => setDropDown(!dropdown)} />)}
        {dropdown && (
          <ExpandMoreIcon className="arrow" onClick={() => setDropDown(!dropdown)} />
        )}
        </div>
        {dropdown && (
          <div className='sidebar-price'  >
            <br/>
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
        )}

        {/* <label className="sidebar-label-container">
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
        </label> */}

      </div>
    </>
  );
}

export default Price