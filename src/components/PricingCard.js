import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from "react";

const PricingCard = () => {
  return <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>- Starting Price -</h3>
            <span className="bar"></span>
            <p className="btc">#200,000</p>
            <p>- 3 Days -</p>
            <p>- Bed Frame -</p>
            <p>- Free Delivery -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>- Starting Price -</h3>
            <span className="bar"></span>
            <p className="btc">#300,000</p>
            <p>- 3 Days -</p>
            <p>- TV Console -</p>
            <p>- Free Delivery -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        
        <div className="card">
            <h3>- Starting Price -</h3>
            <span className="bar"></span>
            <p className="btc">#150,000</p>
            <p>- 3 Days -</p>
            <p>- Wardrobe -</p>
            <p>- Free Delivery -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
    </div>
  </div>;
};

export default PricingCard;