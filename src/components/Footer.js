import React from "react";
import facebookIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import instagramIcon from "../assets/images/instagram.png";
import youtubeIcon from "../assets/images/youtube.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About</h4>
          <p>
            We diminution preference thoroughly if. Joy deal pain view much her
            time. Led young gay would now state. Pronounce we attention admitting.
          </p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" style={{height:'10px', width:'10px'}} />
            <img src={twitterIcon} alt="Twitter" style={{height:'10px', width:'10px'}} />
            <img src={instagramIcon} alt="Instagram" style={{height:'10px', width:'10px'}} />
            <img src={youtubeIcon} alt="YouTube" style={{height:'10px', width:'10px'}} />
          </div>
        </div>
        <div className="footer-column">
          <h4>Shopping Online</h4>
          <ul>
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>Gift Card</li>
            <li>Find a store</li>
            <li>Newsletter</li>
            <li>Become a member</li>
            <li>Site feedback</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>store@mail.com</p>
          <p>Tel: +91 1234 5678 99</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyrights. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
