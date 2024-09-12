import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../Assets folder/Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const {addToCart } =useContext(ShopContext);

  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-main-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <p>(120)</p>
        </div>
    
      
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-prices-old">
          ${product.old_price}
        </div>
        <div className="productdisplay-right-prices-new">
          ${product.new_price}
        </div>
      </div>
      <div className="productdisplay-right-discription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto
        molestiae ratione autem aspernatur.
      </div>
      <div className="productdisplay-right-size">
        <h1>select size</h1>
        <div className="productdisplay-right-sizes">
          <div>s</div>
          <div>m</div>
          <div>l</div>
          <div>xl</div>
          <div>xxl</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
      </div>

      <p className="productdisplay-right-category">
        <span>category:</span> Women, t-shirt,crop topI
      </p>
      <p className="productdisplay-right-category">
        <span>tag:</span> modern latest
      </p>
      </div>
    </div>
  );
}
