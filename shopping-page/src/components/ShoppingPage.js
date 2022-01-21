import React, { useState } from "react";
import "../App.css";
import Products from "./Products.js";

const Shoppingpage = () => {
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
      price: "$20.00 $18.00",
      star: "⭐⭐⭐⭐⭐",
      btnName: "Add to cart",
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      productItem: "Sale Item",
      price: "$50.00 $25.00",
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
      price: " $50.00 $25.00",
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
      price: " $20.00 $18.00",
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
  return (
    <div>
      <header></header>
      <main>
        {/* banner message */}
        <section className="banner">
          <h1 className="shopStyle">Shop in style</h1>
          <p className="template">With this shop hompeage template</p>
        </section>
        {/*Product section */}
        <section className="product-section">
          {initialState.map((data) => {
            return (
              <div>
                <Products
                  productItem={data.productItem}
                  price={data.price}
                  star={data.star}
                  btnName={data.btnName}
                  src={data.src}
                />
              </div>
            );
          })}
        </section>
      </main>
      <footer className="footer">
        <p>Copyright © Your Website 2021</p>
      </footer>
    </div>
  );
};

export default Shoppingpage;
