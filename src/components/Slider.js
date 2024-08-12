import React from "react";
import p1 from "../assets/images/product-1.png";
import p2 from "../assets/images/product-2.png";
import p3 from "../assets/images/product-3.png";
import p4 from "../assets/images/product-4.png";
import truck from "../assets/images/truck.png";
import shield from "../assets/images/shield.png";
import pay from "../assets/images/pay.png";
import quality from "../assets/images/quality.png";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-products">
        <div className="product">
          <img src={p1} alt="Product 1" />
          <p className="product-title">
            BackPack
            <br />
            $285.00
          </p>
        </div>
        <div className="product">
          <img src={p2} alt="Product 2" />
          <p className="product-title">
            Digital watch
            <br />
            $285.00
          </p>
        </div>
        <div className="product">
          <img src={p3} alt="Product 3" />
          <p className="product-title">
            Brown Bag
            <br />
            $285.00
          </p>
        </div>
        <div className="product">
          <img src={p4} alt="Product 4" />
          <p className="product-title">
            Sun glasses
            <br />
            $285.00
          </p>
        </div>
      </div>
      <h3 className="slider-title">Why Should Choose Us</h3>
      <div className="slider-features">
        <div className="feature">
          <div className="feature-icon-container">
            <img src={truck} className="feature-icon" alt="Free Shipping" />
          </div>
          <p className="feature-title">Free shipping</p>
          <p className="feature-description">Fat new smallness few supposing</p>
        </div>
        <div className="feature">
          <div className="feature-icon-container">
            <img src={pay} className="feature-icon" alt="Easy Payments" />
          </div>
          <p className="feature-title">Easy Payments</p>
          <p className="feature-description">Fat new smallness few supposing</p>
        </div>
        <div className="feature">
          <div className="feature-icon-container">
            <img src={shield} className="feature-icon" alt="Money Back Guarantee" />
          </div>
          <p className="feature-title">Money Back Guarantee</p>
          <p className="feature-description">Fat new smallness few supposing</p>
        </div>
        <div className="feature">
          <div className="feature-icon-container">
            <img src={quality} className="feature-icon" alt="Finest Quality" />
          </div>
          <p className="feature-title">Finest Quality</p>
          <p className="feature-description">Fat new smallness few supposing</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
