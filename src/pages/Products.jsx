import { useEffect, useState } from 'react';
import './products.css'; // <-- Import CSS

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setItems(data));
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

  return (
    <div className="products-container">
      <h1 className="products-heading">Our Products</h1>
      <div className="product-list">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-rating">
              {renderStars(item.rating?.rate || 0)}
            </div>
            <div className="product-price">Rs {Math.round(item.price * 280)}</div>
            <div className="product-description">{item.description}</div>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
