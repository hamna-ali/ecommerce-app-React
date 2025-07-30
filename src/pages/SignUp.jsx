import React from "react";
import "./AuthForm.css";
import logo from "../assets/images/logo.png"; // adjust path based on your file structure

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
       <img src={logo} alt="Logo" className="auth-logo" />
        <h2 className="auth-title">Register Yourself</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="auth-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
