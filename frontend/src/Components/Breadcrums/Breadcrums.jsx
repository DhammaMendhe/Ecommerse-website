import React from "react";
import "./breadcrums.css";
import arrow_icon from "../Assets folder/Assets/breadcrum_arrow.png";

export default function Breadcrums(props) {
  const { product } = props;
  return (
    <div className="Breadcrums">
      Home <img src={arrow_icon} alt="" /> SHOP
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
}
