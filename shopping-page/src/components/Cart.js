import React, { useState ,useContext} from "react";

export default function Cart({context}) {
  const {initialCart,updateCart} = useContext(context);
  return (
    <div>
      <button className="btn btn-outline-dark" type="submit">
        <i class="bi bi-cart"></i>
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">
          {initialCart}
        </span>
      </button>
    </div>
  );
}
