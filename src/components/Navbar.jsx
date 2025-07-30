// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-[#1b145c] text-white px-8 py-4 shadow-md">
//     <h1 className="text-xl font-bold">E-Commerce Store</h1>
//       <Link to="/">Home</Link>
//       <Link to="/products">Products</Link>
//       <Link to="/cart">Cart</Link>
//       <Link to="/contact">Contact Us</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Signup</Link>
//     </nav>
//   );
// }
// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cartImage_2 from "../assets/images/cart.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={cartImage_2} alt="Store Logo" className="logo" />
        <span className="store-name">E-Commerce Store</span>
      </div>

      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="navbar-right">
        <Link to="/login" className="auth-button">Login</Link>
        <Link to="/signup" className="auth-button">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
