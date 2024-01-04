import React, { useState } from 'react';
import './Ratings.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Ratings = ({handleRating}) => {

  const [dropdown,setDropDown] = useState(false);
  
  return (
      <div className='sidebar-rating'>
        <br/>
        <div className='ratings-heading'>
      <span className="sidebar-title">RATINGS  </span>
        {!dropdown && (
          <ChevronRightIcon className="arrow" onClick={() => setDropDown(!dropdown)} />)}
          {dropdown && (
            <ExpandMoreIcon className="arrow" onClick={() => setDropDown(!dropdown)} />
        )}
        </div>
        {dropdown && (
          <div>
            <br/>
            <label className="sidebar-label-container">
              <input onChange={handleRating} type="radio" value="0" name="test3" />
              <span className="checkmark"></span>All
            </label>

            <div className='star'>

              <label className="sidebar-label-container">
                <input onChange={handleRating} type="radio" value="5" name="test3" />
                <span className="checkmark"></span> <span>{'\u2605'} {'\u2605'} {'\u2605'} {'\u2605'} {'\u2605'}</span>
              </label>

              <label className="sidebar-label-container">
                <input onChange={handleRating} type="radio" value="4" name="test3" />
                <span className="checkmark" ></span> <span>{'\u2605'} {'\u2605'} {'\u2605'} {'\u2605'} {'\u2606'}</span>
              </label>

              <label className="sidebar-label-container">
                <input onChange={handleRating} type="radio" value="3" name="test3" />
                <span className="checkmark" ></span> <span>{'\u2605'} {'\u2605'} {'\u2605'} {'\u2606'} {'\u2606'}</span>
              </label>

              <label className="sidebar-label-container">
                <input onChange={handleRating} type="radio" value="2" name="test3" />
                <span className="checkmark" ></span> <span>{'\u2605'} {'\u2605'} {'\u2606'} {'\u2606'} {'\u2606'}</span>
              </label>

              <label className="sidebar-label-container">
                <input onChange={handleRating} type="radio" value="1" name="test3" />
                <span className="checkmark" ></span> <span>{'\u2605'} {'\u2606'} {'\u2606'} {'\u2606'} {'\u2606'}</span>
              </label>

            </div>
          </div>
        )}
    </div>
  )
}

export default Ratings