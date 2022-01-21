import React from "react";
import Button from "./Button.js";

const Products = ({ productItem,
  price,
  star,
  btnName,
  src}) => {
  
  return (
    <div className="productBox">
      <div>
        <img
          className="image-container"
          src={src}
          alt="450 x 300"
        />
      </div>
      <div className="details-container">
        <h5>{productItem}</h5>
        {star}
        <p>{price}</p>
        <Button label ={btnName} handleClick={(e)=> console.log("Clicked me",e)}/>
      </div>
    </div>
  );
};

export default Products;
