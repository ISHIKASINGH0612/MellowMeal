import React from "react";
import "./orderpage.css";

const OrderPage = ({ item, onBack }) => {
  return (
    <div className="order-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="order-card">
        <img src={item.image} alt={item.name} className="order-img" />

        <div className="order-info">
          <h1>{item.name}</h1>
          <p className="price">Price: {item.price}</p>
          <p className="desc">{item.description}</p>

          <button className="confirm-btn">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
