import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Portfolio</a>
        <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Profile</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
