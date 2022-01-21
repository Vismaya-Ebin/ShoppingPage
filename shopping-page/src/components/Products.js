import React from "react";
import Button from "./Button.js";

const Products = ({ productItem, price, oldPrice, star, btnName, src }) => {
  const strike = {
    textDecoration: "line-through",
    marginRight: "0.6rem",
  };

  return (
    <div className="productBox">
      <div>
        <img className="image-container" src={src} alt="450 x 300" />
      </div>
      <div className="details-container">
        <h5 class="fw-bolder">{productItem}</h5>
        <span> {star}</span>
        <p>
          <span style={strike}>{oldPrice}</span>
          {price}
        </p>
      </div>
      <Button
        label={btnName}
        handleClick={(e) => console.log("Clicked me", e)}
      />
    </div>
  );
};

export default Products;
