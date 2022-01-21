import React from 'react';
import '../App.css';

import Cart from "./Cart.js";
export default function Header() {
    const styles={
        fontSize: "1.25rem"
    }
   
  return <div className="header">
      <div style={styles}>Start Bootstrap</div>
      {/* <div>Home</div>
      <div>About</div>
      <div><ul>Shop</ul>
      <li>All Products</li>
      <li>Popular Items</li>
      <li>New Arrivals</li>
     
      </div> */}
      
      <div><Cart/></div>
  </div>;
}
