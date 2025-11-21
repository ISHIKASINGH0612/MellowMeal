import React from "react";
import "./OpeningPage.css";

const OpeningPage = () => {

  const scrollToMenu = () => {
    const menuSection = document.getElementById("restaurant-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="opening-container">
      <div className="content">
        <h1 className="title">MellowMeal</h1>
        <p className="tagline">Where Every Bite Feels Like Home</p>

        <button className="start-btn" onClick={scrollToMenu}>
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default OpeningPage;


