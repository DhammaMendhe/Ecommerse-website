import React, { useContext } from "react";

import { ShopContext } from "../../Context/ShopContext";
// import data from "../Assets folder/Assets/all_product";
import prodcuct from "../Assets folder/Assets/product_24.png";

import "./order.css";
import amazonpay from "../Assets folder/icons/amazon-pay-brands-solid.svg";
import tag from "../Assets folder/icons/tag-solid.svg";
import paypal from "../Assets folder/icons/paypal-brands-solid.svg";
import visa from "../Assets folder/icons/cc-visa-brands-solid.svg";
import mastercard from "../Assets folder/icons/cc-mastercard-brands-solid.svg";
import handshake from "../Assets folder/icons/handshake-regular.svg";

function Order() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div className="big-container">
      <div className="f-container">
        <h2>1 Item in your cart...</h2>
        <p>keep shopping</p>
      </div>
      <div className="scontainer">
        <img className="f-icon-img" src={handshake} alt="" />
        <p>
          Empowering Your Shopping Experience – Discover the Best Deals, Protect
          Your Purchases, and Shop with Confidence.
        </p>
      </div>

      {/* contains middle part and method of payment */}
      <div className="main-container">
        {/* all item that contain information */}
        <div>
          <div className="item-info">
            <div className="logo-company">
              <div>
                {" "}
                <h5> THIS IS SHOPPER</h5>
              </div>
              <div className="contact"><p>contact shop</p></div>
            </div>
            {/* {Object.values(cartItems).map((item) => { */}
            {/* return ( */}
            <div className="item-container">
              {/* <div className="item-img-desc"> */}
                {/* product img */}

                <div className="for-img">
                  <img src={prodcuct} alt="" />
                </div>

                <div className="description">
                  <h5 style={{fontWeight:400 ,width:'50%'}}>This is title of product ana want to Lorem ipsum dolor sit amet.</h5>
                  <p>primary color : red</p>

                  <div className="butttons">
                    <button>save for later</button>
                    <button>remove</button>
                  </div>
                </div>
              {/* </div> */}
            </div>

            {/* ); */}
            {/* })} */}
            {/* prodcuct end */}

            <div className="item-container-bottom">
              {/* gift area */}
              <div className="order-gift">
                <input type="checkbox" name="" id="" />
                <p>This order is gift</p>
                <p>prices will not shown on product packaging slip...</p>

                <textarea
                  name="message"
                  defaultValue=" Add a note SHOPPER.."
                  rows="4"
                  cols="30"
                ></textarea>
              </div>

              {/* add coupon code here */}
              <div className="add-coupon-code">
                <img className="tag-icon-img" src={tag} alt="" />
                <p>Apply shop coupon codes</p>
                <h5>shipping</h5>
                <p>Estimated delevary:</p>
              </div>
            </div>
          </div>
        </div>
        {/* payment checkout to proceed */}
        {/* <div className="buy-container"> </div> */}
        <p>how you'll pay</p>
        <div className="payment-menthod">
          <div>
            <input type="checkbox" value="" />
            <img className="icon-img" src={paypal} alt="" />
          </div>
          <div>
            <input type="checkbox" value="" />
            <img className="icon-img" src={visa} alt="" />
          </div>
          <div>
            <input type="checkbox" value="" />
            <img className="icon-img" src={mastercard} alt="" />
          </div>
          <div>
            <input type="checkbox" value="" />
            <img className="icon-img" src={amazonpay} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
