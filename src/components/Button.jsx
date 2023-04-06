import React from "react";
import "./Button.scss";

export const Button = ({ randomButton }) => {
  const handleClick = () => {
    randomButton();
  };
  return (
    <button onClick={handleClick} className="btn btn__secondary">
      Random Beer!
    </button>
  );
};
