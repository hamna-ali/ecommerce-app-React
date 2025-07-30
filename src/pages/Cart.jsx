import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchedProduct = {
      id: 1,
      name: "Iphone",
      color: "Red",
      quantity: 1,
      price: 350999,
      image:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
    };
    setCart([fetchedProduct]);
  }, []);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setShowPopup(true);
    setCart([]);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
return (
  <div className="cart-container">
    <h1 className="cart-title">Your Add to Cart</h1>

    {cart.length === 0 ? (
      <div className="empty-cart">
        🛒 Your cart is empty
        <Link to="/">
          <button className="continue-btn">Shop Now</button>
        </Link>
      </div>
    ) : (
      <>
        {cart.map((product) => (
          <div key={product.id} className="cart-product">
            <img src={product.image} alt={product.name} className="cart-image" />
            <div className="cart-details">
              <div>{product.name}</div>
              <div>{product.color}</div>
              <div className="quantity-buttons">
                <button onClick={() => decreaseQty(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQty(product.id)}>+</button>
              </div>
              <div>{product.price.toLocaleString()} Rs</div>
              <div>
                {(product.price * product.quantity).toLocaleString()} Rs
              </div>
            </div>
            <FaTrashAlt className="delete-icon" onClick={() => removeItem(product.id)} />
          </div>
        ))}

        <div className="cart-total">Order total: {total.toLocaleString()} Rs</div>

        <div className="cart-buttons">
          <Link to="/">
            <button className="continue-btn">Continue Shopping</button>
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </>
    )}

    {showPopup && (
      <div className="popup-overlay">
        <div className="popup-message">🧡 Items checked out successfully!</div>
      </div>
    )}
  </div>
);
};

export default Cart;
