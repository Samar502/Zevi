import React from 'react';

const Input = ({handleCategory, value, title, name}) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleCategory} type="radio" value={value} name={name} />
      <span className="checkmark" ></span>
      {title}
    </label>
  )
}

export default Input