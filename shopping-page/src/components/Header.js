import React from 'react';
import '../App.css';

import Cart from "./Cart.js";
export default function Header({context}) {
    const styles={
        
        fontSize: "1.25rem"
    }
    const margin = { marginLeft:"auto"};
   
  return <div className="header">
      <div style={styles}>Start Bootstrap</div>
     <div>About</div>
     <div>Home</div>
     <div>About</div>
      
      <div style={margin}><Cart context={context}/></div>
  </div>;
}
