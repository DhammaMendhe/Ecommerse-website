import React from "react";
import "./footer.css";
import footer_logo from "../Assets folder/Assets/logo_big.png";
import insta_logo from "../Assets folder/Assets/instagram_icon.png";
import pinterest_logo from "../Assets folder/Assets/pintester_icon.png";
import whatsup_logo from "../Assets folder/Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer-container">
            <hr className="middle-hr-tag" />

      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <div>
          <h2>SHOPPER</h2>
          <hr className="hr-tag" />
        </div>
      </div>
      <div className="footer-left-side">
        <div className="first">
          <ul>
            <li>company</li>
            <li>product</li>
            <li>About</li>
            <li>offices</li>
            <li>contacts</li>
          </ul>
        </div>
      </div>


      <div className="footer-social-icon">
        <div>
          <img src={insta_logo} alt="" />
        </div>
        <div>
          <img src={pinterest_logo} alt="" />
        </div>
        <div>
          <img src={whatsup_logo} alt="" />
        </div>
      </div>
      <hr className="middle-hr-tag" />

      <div className="footer-cpy-right">
        <p>copyright @ 2023- All copyrights Are Reserved.</p>
      </div>
    </div>
  );
}
