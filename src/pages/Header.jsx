import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <a 
              href="https://www.facebook.com/sp.blackpeak.bg" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/blackpeakspeleo/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

