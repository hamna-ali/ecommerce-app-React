import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import "./products.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(20);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < fullStars ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const loadMore = () => {
    setVisibleProducts(prev => prev + 20);
  };

  return (
    <div>
      <Carousel />
      <h1 className="products-heading">Featured Products</h1>
      <div className="product-list">
        {products.slice(0, visibleProducts).map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-rating">{renderStars(item.rating?.rate || 0)}</div>
            <div className="product-price">Rs {Math.round(item.price * 280)}</div>
            <div className="product-description">{item.description}</div>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Home;
