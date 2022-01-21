import React from "react";

const Button = ({ label, handleClick }) => {
  const buttonStyle = {
    textAlign: "center",
    marginBottom:"3.3rem",
  
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
