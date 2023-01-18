import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from "../layout/header/navbar/Navbar";

import "./menu.css";
import MenuList from "./menuList/MenuList";

function Menu(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleClickBars = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="menu-container">
      <AccountCircleIcon
        onClick={handleClick}
        className="inline-element"
      />
      <MenuIcon
        onClick={handleClickBars}
        className="inline-element bars"
      />
      {openMenu && <MenuList />}
      {showNavbar && <Navbar />}
    </div>
  );
}

export default Menu;
