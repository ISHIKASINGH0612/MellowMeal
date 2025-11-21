// src/components/Orderpage/OrderPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './orderpage.css'; // create this for styles

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item; // from navigate state

  return (
    <div className="order-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="order-card">
        <h1>Place Your Order</h1>

        {item ? (
          <div className="item-detail">
            <img src={item.image} alt={item.name} className="order-img" />
            <div className="item-meta">
              <h2>{item.name}</h2>
              <p className="category">{item.category}</p>
              <p className="price">{item.price}</p>
              <p className="desc">{item.description}</p>
              {/* Put order form / add-to-cart button here */}
              <button className="confirm-btn">Confirm Order</button>
            </div>
          </div>
        ) : (
          <p>No item selected. You can go back and choose an item from the menu.</p>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
