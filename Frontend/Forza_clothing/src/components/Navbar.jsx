import React from 'react';
import './Navbar.css';
import Home from '../pages/Home';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo" onClick={()=>navigate('/')}>forza</div>
      </div>
      <nav className="navbar-center a">
        <a href="/mens wear">Men</a>
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
