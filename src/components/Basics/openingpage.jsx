import React from "react";
import "./OpeningPage.css";
// import { useNavigate } from "react-router-dom";


const OpeningPage = ({ onStart }) => {
  return (
    <div className="opening-container">
      <div className="content">
        <h1 className="title">MellowMeal</h1>
        <p className="tagline">Where Every Bite Feels Like Home</p>

        <button className="start-btn" onClick={onStart}>
          Explore Menu
        </button>
        {/* const navigate = useNavigate();

<button className="start-btn" onClick={() => navigate("/menu")}>
  Explore Menu
</button> */}

      </div>
    </div>
  );
};

export default OpeningPage;
