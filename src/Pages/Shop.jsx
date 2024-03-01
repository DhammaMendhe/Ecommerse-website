import React from "react";
import Hero from "../Components/Assets folder/hero/Hero";
import Item from "../Components/item/Item";
import Popular from "../Components/popular/Popular";
import Offers from "../Components/offers/Offers";


export default function Shop() {
  return (
    <div>
      <Hero />
      <Item />
      <Popular/>
      <Offers/>
    </div>
  );
}
