import React from "react";
import Hero from "../Components/Assets folder/hero/Hero";
 import Popular from "../Components/popular/Popular";
import Offers from "../Components/offers/Offers";
import NewCollections from "../Components/New Collections/NewCollections";
import NewsLetters from "../Components/news letter/NewsLetters";


export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/> 
      <NewCollections/>
      <NewsLetters/>
    </div>
  );
}
