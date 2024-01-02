import React from 'react';
import './Card.css';
// import { BsFillBagFill } from "react-icons/bs";

const Card = ({img, title, price, rating}) => {
    return (
        <>
          <section className="card">
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
                <div>
                  {rating.rate}
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