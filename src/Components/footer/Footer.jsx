import React from "react";
import "./footer.css";
import footer_logo from "../Assets folder/Assets/logo_big.png";
import insta_logo from "../Assets folder/Assets/instagram_icon.png";
import pinterest_logo from "../Assets folder/Assets/pintester_icon.png";
import whatsup_logo from "../Assets folder/Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div class="footer-container">
      <div class="footer-logo">
        <img src={footer_logo} alt="" />
        <div>
          <h2>SHOPPER</h2>
          <hr class="hr-tag" />
        </div>
      </div>
      <div class="footer-left-side">
        <div class="first">
          <ul>
            <li>company</li>
            <li>product</li>
            <li>About</li>
            <li>offices</li>
            <li>contacts</li>
          </ul>
        </div>
      </div>


      <div class="footer-social-icon">
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
      <hr class="middle-hr-tag" />

      <div class="footer-cpy-right">
        <p>copyright @ 2023- All copyrights Are Reserved.</p>
      </div>
    </div>
  );
}
