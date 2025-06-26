import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">forza</div>
      </div>
      <nav className="navbar-center">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">New Arrivals</a>
        <a href="#">Sale</a>
      </nav>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="cart-button">🛒</button>
      </div>
    </header>
  );
};

export default Navbar;
