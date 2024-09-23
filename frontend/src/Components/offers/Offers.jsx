import React from "react";
import "./offers.css";
import exclusive_img from "../Assets folder/Assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="offers">
      <div className="left-offers">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLINGS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="right-offers">
        <img src={exclusive_img} alt="girl" />
      </div>
    </div>
  );
}
