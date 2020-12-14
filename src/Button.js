import React from "react";
import "./Button.css";

const Button = ({ title, clickable }) => {
  return (
    <button className="btn" onClick={clickable}>
      {title}
    </button>
  );
};

export default Button;
