import React, { useState } from 'react';
import './Card.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({img, title, price, rating, onClick, wishlist, id}) => {

    const [hovered, setHovered] = useState(false);
    const filledStars = parseInt(Math.round(rating.rate));
    return (
        <>
          <section className="card">
            <div className='wishlist'>
              {!wishlist.includes(id) &&
              <FavoriteBorderIcon onClick={onClick} className="not-in-wishlist"/>}
              {wishlist.includes(id) && 
              <FavoriteIcon onClick={onClick} className="in-wishlist"/>
              }
            </div>
            
            <img src={img} alt={title} className="card-img" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/>
            
            {hovered  && (
              <div className="view-product" >View Product</div>
            )}
            <div className="card-details">
              <h3 className="card-title">{title}</h3>
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
              </section>
            </div>
          </section>
        </>
      );
}

export default Card