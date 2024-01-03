import React from 'react';
import './Ratings.css';

const Ratings = ({handleRating}) => {
  
  return (
      <div>
      <h2 className="sidebar-title">RATINGS</h2>

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
  )
}

export default Ratings