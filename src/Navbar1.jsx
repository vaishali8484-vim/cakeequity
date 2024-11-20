import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsiveMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <div className="dropdown">
        <button className="dropbtn">Dropdown 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
      <a href="#about">About</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsiveMenu}>&#9776;</a>
    </div>
  );
}

export default Navbar;
