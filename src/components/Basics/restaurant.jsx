// import React from 'react';
// import "./style.css";
//  import Menu from './menuApi';
//  import Menucard from './menuCard';

// const Restaurant = () => {

// const [menuData, setMenuData] = React.useState(Menu);

// const filterItem = (category) => {
//   const updatedList = Menu.filter((curElem) => {
//     return curElem.category === category;
//   });
//   setMenuData(updatedList);
// };

//   return (
//     <>
      
//       <nav className='navbar'>
//         <div className="btn-group">
//           <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
//           <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
//           <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
//           <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
//           <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
//         </div>
//       </nav>
//       <Menucard menuDataContent={menuData} />
//     </>
//   );
// };

// export default Restaurant;

import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;