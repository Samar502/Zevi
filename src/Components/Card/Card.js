import React, { useState } from 'react';
import './Card.css';
// import { BsFillBagFill } from "react-icons/bs";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({img, title, price, rating, onClick, wishlist, id}) => {

    const filledStars = parseInt(Math.round(rating.rate));

    return (
        <>
          <section className="card">
            <div>
              {!wishlist.includes(id) &&
              <FavoriteBorderIcon onClick={onClick} className="not-in-wishlist"/>}
              {wishlist.includes(id) && 
              <FavoriteIcon onClick={onClick} className="in-wishlist"/>
              }
            </div>
            <img src={img} alt={title} className="card-img" />
            <div className="card-details">
              <h3 className="card-title">{title}</h3>
              {/* <section className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
              </section> */}
              <section className="card-price">
                <div className="price">
                  Rs. {price}
                </div>
                <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <span
                    key={index}
                    className={`star ${index < filledStars ? 'filled' : ''}`}
                    >
                    {index < filledStars ? '\u2605' : '\u2606'}
                    </span>
                ))} 
                ({rating.count})
                </div>
                {/* <div className="bag">
                  <BsFillBagFill className="bag-icon" />
                </div> */}
              </section>
            </div>
          </section>
        </>
      );
}

export default Card