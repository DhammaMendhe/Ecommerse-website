import React from "react";
import './item.css'
export default function Item(props) {
  return (
    <div className="item">
      <img src={props.img} alt="product img" />
      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-new-prices">${props.new_price}</div>

        <div className="item-old-prices">${props.old_price}</div>
      </div>
    </div>
  );
}
