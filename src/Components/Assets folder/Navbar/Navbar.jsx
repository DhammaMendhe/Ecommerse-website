import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../Context/ShopContext";

function Navbar() {
const {count} = useContext(ShopContext)

  const [menu, setmenu] = useState("MEN");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setmenu("SHOP");
          }}
        >
          <Link style={{textDecoration: "none"}} to="/">SHOP</Link>
           {menu === "SHOP" ? <hr /> : <></>}


        </li>
        <li
          onClick={() => {
            setmenu("MEN");
          }}
        >
          <Link style={{textDecoration: "none"}} to="/MEN">MEN</Link>
          {menu === "MEN" ? <hr /> : <></>}
        </li>
        
        <li
          onClick={() => {
            setmenu("WOMEN");
          }}
        >
          <Link style={{textDecoration: "none"}} to="/WOMEN">WOMEN</Link>
          {menu === "WOMEN" ? <hr /> : <></>}

        </li>
    
        <li
          onClick={() => {
            setmenu("KIDS");
          }}
        >
          <Link style={{textDecoration: "none"}} to="/KIDS">KIDS</Link>
          {menu === "KIDS" ? <hr /> : <></>}

        </li>
      </ul>

      <div className="log-in-cart">
          <Link  to="/Login" ><button>login</button></Link>
        
          <Link  to="/cart" ><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{count}</div>
      </div>
    </div>
  );
}
export default Navbar;
