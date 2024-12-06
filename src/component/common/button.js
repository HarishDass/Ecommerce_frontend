import React from "react";
import "../../index.css";

const Button = ({ title, handleClick, type }) => {
  return (
    <button
      onClick={handleClick}
      className={`${type === "primary" ? "button-primary" : "button-default"}`}
    >
      {title}
    </button>
  );
};

export default Button;
