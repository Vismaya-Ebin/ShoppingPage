import React from 'react';
import '../App.css';

import Cart from "./Cart.js";
export default function Header({context}) {
    const styles={
        
        fontSize: "1.25rem"
    }
    const margin = { marginLeft:"auto",marginRight: "10rem"};
   
  return <div className="header">
      <div style={styles}>Start Bootstrap</div>
    
     <div>Home</div>
     <div>About</div>
      <div>Shop<select><options >qa</options>
      <options value="a">a</options>
      <options value="a">a</options></select></div>
      <div style={margin}><Cart context={context}/></div>
  </div>;
}
