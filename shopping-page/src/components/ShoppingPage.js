import React, { useState } from "react";
import "../App.css";
import Products from "./Products.js";
import Header from "./Header.js";
import { createContext, useContext } from "react";

const Shoppingpage = () => {
  const context = createContext(null);
  const productDetails = [
    {
      productItem: "Fancy Product",
      price: "$40.00 - $80.00",
      star: "",
      btnName: "View options",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Special Item",
      oldPrice: "$20.00",
      price: "$18.00",
      star: "⭐⭐⭐⭐⭐",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Sale Item",
      oldPrice: "$50.00",
      price: "$25.00",
      star: "",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Popular Item",
      price: " $40.00",
      star: "⭐⭐⭐⭐⭐",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Sale Item",
      oldPrice: "$50.00",
      price: " $25.00",
      star: "",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Fancy Product",
      price: " $120.00 - $280.00",
      star: "",
      btnName: "View options",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Special Item",
      oldPrice: "$20.00",
      price: "$18.00",
      star: "⭐⭐⭐⭐⭐",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Popular Item",
      price: " $40.00",
      star: "⭐⭐⭐⭐⭐",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
  ];
  const [initialState, updatedState] = useState(productDetails);
  const [initialCart, updateCart] = useState(0);
  const object = { initialState: initialState, updatedState: updatedState ,initialCart:initialCart,updateCart:updateCart};
  return (
    <context.Provider value={object}>
      <div>
        <header>
          <Header context={context} />
        </header>
        <main>
          {/* banner message */}
          <section className="banner">
            <h1 className="shopStyle">Shop in style</h1>
            <p className="template">With this shop hompeage template</p>
          </section>
          {/*Product section */}
      
            <div >
            <Products context={context} />
            </div>
            
            
        
        </main>

        <footer className="footer">
          <p>Copyright © Your Website 2021</p>
        </footer>
      </div>
    </context.Provider>
  );
};

export default Shoppingpage;
