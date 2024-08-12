import React from 'react';
import './Header.css';
import cartimg from '../assets/images/cart.png'
import searchimg from '../assets/images/search.png'
import dropbtnimg from '../assets/images/down arrow.png'

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Pages</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <div className="right-section">
          <div className="dropdown" style={{marginLeft:20, marginTop:3}}> 
            <button className="dropbtn">
              ENG <img src={dropbtnimg} alt="Arrow Down" className="icon-image"  style={{height:5, width:10, marginLeft:10}}/>
            </button>
            <div className="dropdown-content">
              <a href="#">ENG</a>
              <a href="#">ESP</a>
              <a href="#">FRA</a>
            </div>
          </div>
          <img src={cartimg} alt="Shopping Cart" className="icon-image" />
          <img src={searchimg} alt="Search" className="icon-image" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
