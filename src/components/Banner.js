import React from "react";
import "./Banner.css";
import bannerImage from "../assets/images/Slider-img.png";
import leftarrowImage from "../assets/images/left-arrow.png";
import rightarrowImage from "../assets/images/right-arrow.png";
import Header from "./Header";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <Header />
      <div className="banner-content">
        <h6 className="sale-text">SALE</h6>
        <h1 className="banner-title">
          STOCKTAKE SALE <br /> UPTO 75% OFF
        </h1>
        <button className="shop-now-btn">SHOP NOW</button>
      </div>
      <div className="banner-bottom">
        <div className="banner-info">
          <div className="info-section">
            <div className="info-item">
              <h5 className="info-title">Free Shipping</h5>
              <h6 className="info-description">Fat new smallness few supposing</h6>
            </div>
            <div className="info-item">
              <h5 className="info-title">99% satisfied customers</h5>
              <h6 className="info-description">Fat new smallness few supposing</h6>
            </div>
            <div className="info-item">
              <h5 className="info-title">Originality Guaranteed</h5>
              <h6 className="info-description">Fat new smallness few supposing</h6>
            </div>
          </div>
        </div>
        <div className="banner-controls">
          <div className="control-btn">
            <img src={leftarrowImage} alt="Left Arrow" />
          </div>
          <div className="control-btn">
            <img src={rightarrowImage} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
