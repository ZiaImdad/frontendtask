import React from "react";
import menimg from "../assets/images/men-coll.png";
import womenimg from "../assets/images/women-coll.png";
import p1 from "../assets/images/product-1.png";
import p2 from "../assets/images/product-2.png";
import p3 from "../assets/images/product-3.png";
import p4 from "../assets/images/product-4.png";
import "./productsection.css";

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-images">
        <img src={menimg} className="product-image" />
        <div className="product-info" style={{ left: "180px" }}>
          <h3>
            Men's Cascual
            <br /> Fashion style
          </h3>
          <button className="view-all-btn">View All</button>
        </div>
        <img src={womenimg} className="product-image" />
        <div className="product-info" style={{ left: "480px" }}>
          <h3>
            Women's Cascual
            <br /> Fashion style
          </h3>
          <button className="view-all-btn">View All</button>
        </div>
      </div>
      <div className="selected-for-you">
        <h3>Selected Just For You</h3>
        <button className="show-more-btn">Show more</button>
      </div>
    </div>
  );
};

export default ProductSection;
