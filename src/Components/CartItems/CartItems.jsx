import React, { useContext } from "react";
import "./cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets folder/Assets/cart_cross_icon.png";

export default function CartItems() {
  const { getTotalcartAmount, all_product, cartItems, removeFromeCart } = useContext(ShopContext);
  return (
    <div className="CartItems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>removal</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitem-product-image" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromeCart(e.id);
                  }}
                  alt=""
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>total</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <button> Proceed To Cheakout</button>
          </div>
        </div>
        <div className="cartitems-promocode">
        <p>If you hava a promocode, Enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder="promo code" />
          <button>submit</button>
        </div>
       </div>
      
      </div>
    </div>
  );
}
