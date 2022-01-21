import React from "react";

const Button = ({ label, handleClick }) => {
  const buttonStyle = {
    textAlign: "center",
  };
  
  return (
    <div className="details-container">
      <button
        class="btn btn-outline-dark mt-auto"
        style={buttonStyle}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
