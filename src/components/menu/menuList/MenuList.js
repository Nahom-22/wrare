import React from "react";

import './menu-list.css'

function MenuList(props) {
  return (
    <div className="menu-list-container">
      <ul className="menu-lists">
        <li>
          <a href="myworks">My Works</a>
        </li>
        <li>
          <a href="liked">Liked</a>
        </li>
        <li>
          <a href="favorites">Favorites</a>
        </li>
        <li>
          <a href="saved">Saved</a>
        </li>
        <li>
          <a href="settings">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
