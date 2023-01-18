import React from "react";

import './button.css'

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`btn ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
