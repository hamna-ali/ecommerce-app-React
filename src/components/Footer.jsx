import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>E-Commerce Store</h3>
        <p>
          At Our Ecommerce Store, we are passionate about providing exceptional
          products and an unparalleled shopping experience. We strive to offer a
          curated selection of high-quality items that meet the diverse needs and
          tastes of our valued customers.
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-column responsive-links">
          <h4>Links</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
