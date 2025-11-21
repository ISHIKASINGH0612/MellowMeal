import React from "react";
import "./OpeningPage.css";

const OpeningPage = () => {

//   const scrollToMenu = () => {
//     const menuSection = document.getElementById("restaurant-section");
//     if (menuSection) {
//       menuSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

  return (
    <div className="opening-container">
      <div className="content">
        <h1 className="title">MellowMeal</h1>
        <p className="tagline">Where Every Bite Feels Like Home</p>

        <button className="start-btn" >
       
          Explore Menu
        </button>
      </div>
    </div>
  );
};

//  onClick={scrollToMenu}
export default OpeningPage;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./OpeningPage.css";

// const OpeningPage = () => {

//   const navigate = useNavigate();

//   const goToMenu = () => {
//     navigate("/menu");   // ✔ moves to Restaurant.jsx page
//   };

//   return (
//     <div className="opening-container">
//       <div className="content">
//         <h1 className="title">MellowMeal</h1>
//         <p className="tagline">Where Every Bite Feels Like Home</p>

//         <button className="start-btn" onClick={goToMenu}>
//           Explore Menu
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OpeningPage;
