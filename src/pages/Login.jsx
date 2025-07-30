import React from "react";
import "./AuthForm.css";
import logo from "../assets/images/logo.png"; // adjust path based on your file structure

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="Logo" className="auth-logo" />
        <h2 className="auth-title">Login Here</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
