import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState("MEN");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li>SHOP <hr/></li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>

      <div className="log-in-cart">
        <button>
          <Link style={{textDecoration: "none"}} to="/LoginSignup">login</Link>
        </button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
export default Navbar;
