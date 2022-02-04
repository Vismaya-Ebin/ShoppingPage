import React, { useContext } from "react";
import Button from "./Button.js";
import "../App.css";

const Products = ({ context }) => {
  const strike = {
    textDecoration: "line-through",
    marginRight: "0.6rem",
  };

  const contentContainer = {
    height: "7.5rem",

    textAlign: "center",
    marginTop:"1.6rem",
  };

  const { initialState, updatedState,initialCart,updateCart } = useContext(context);
  console.log("Value is here", initialState);

  return (
    <div className="product-section">
      {initialState.map((data, index) => {
        return (
          <div className="productBox">
            <div>
              <img className="image-container" src={data.src} alt="450 x 300" />
            </div>
            <div style={contentContainer}>
              <h5 class="fw-bolder">{data.productItem}</h5>
              <span> {data.star}</span>
              <p>
                <span style={strike}>{data.oldPrice}</span>
                {data.price}
              </p>
            </div>
            <Button
              label={data.btnName}
              handleClick={(e) => updateCart(data.btnName === "Add to cart" ?initialCart + 1:initialCart)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
