import React from "react";
import heroImage from "../assets/images/bgi.jpg"; // Make sure this path is correct
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <img src={heroImage} alt="Hero" className="carousel-image" />
    </div>
  );
};

export default Carousel;
