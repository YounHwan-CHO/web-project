// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">JO PORTFOLIO</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#goals">Goals</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;