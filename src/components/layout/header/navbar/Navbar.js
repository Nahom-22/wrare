import React from "react";

import './navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-lists">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/browse">Browse</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/signin">Sign In</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
