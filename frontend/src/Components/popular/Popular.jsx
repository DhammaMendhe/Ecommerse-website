import React from "react";
import "./popular.css";
import product_data from "../Assets folder/Assets/data";
import Item from "../item/Item";

export default function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {product_data.map((item,i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
