import React from "react";
import Menu from "../../menu/Menu";
import Navbar from "./navbar/Navbar";

import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-item-wrapper left">
          <Menu />
        </div>
        <div className="header-item-wrapper center">
          <h2>WRARE</h2>
        </div>
        <div className="header-item-wrapper right">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
