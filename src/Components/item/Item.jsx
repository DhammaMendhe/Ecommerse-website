import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.img} alt="product img" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-new-prices">${props.new_price}</div>

        <div className="item-old-prices">${props.old_price}</div>
      </div>
    </div>
  );
}
