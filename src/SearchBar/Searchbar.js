import React, { useEffect, useState } from 'react';
import './SearchBar.css';

const Searchbar = ({handleSearch, search}) => {
  
    return (
        <nav>
        <div className="nav-container">
          <input
            className="search-input"
            type="search"
            onChange={handleSearch}
            value={search}
            placeholder="Search"
          />
        </div>

        <img className="zevi-image" src="https://assets-global.website-files.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp" alt="Zevi.ai"></img>
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