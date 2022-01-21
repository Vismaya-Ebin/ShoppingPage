import React, { useState } from "react";

export default function Cart() {
  const [initialCart, updateCart] = useState(0);
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
