import React, { useEffect, useState } from 'react';

const Searchbar = ({handleSearch, search}) => {
  
    return (
        <nav>
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="Enter your search shoes."
          />
        </div>
        {/* <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div> */}
      </nav>
    )
}

export default Searchbar