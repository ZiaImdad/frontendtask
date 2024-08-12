import React from "react";
import p1 from "../assets/images/New-product-1.png";
import p2 from "../assets/images/new-product-2.png";
import p3 from "../assets/images/new-product-3.png";
import p4 from "../assets/images/new-product-4.png";
import './slider2.css'; // Import the CSS file

const Slider2 = () => {
  return (
    <div className="slider-container">
      <div className="header-container">
        <h3>New Arrival</h3>
        <button className="show-more-button">
          Show more
        </button>
      </div>
      <div className="products-container">
        <div className="product">
          <img src={p1} alt="Product 1" />
          <p>Louis Victtom Bag<br />$285.00</p>
        </div>
        <div className="product">
          <img src={p2} alt="Product 2" />
          <p>Louis Victtom Bag<br />$285.00</p>
        </div>
        <div className="product">
          <img src={p3} alt="Product 3" />
          <p>Louis Victtom Bag<br />$285.00</p>
        </div>
        <div className="product">
          <img src={p4} alt="Product 4" />
          <p>Louis Victtom Bag<br />$285.00</p>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
