import React from "react";
import "./BottomBanner.css";
import bannerImage from "../assets/images/New-Collection--img.png"; // Ensure the path is correct

const BottomBanner = () => {
  return (
    <div className="bottom-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="bottom-banner-content">
        <div className="bottom-banner-text">
          <h4>NEW COLLECTIONS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut.
          </p>
        </div>
        <button className="bottom-shop-now-button">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
