import React from 'react';
import "./style.css";
 import Menu from './menuApi';

const Restaurant = () => {

  const [menuData, setMenuData] = React.useState(Menu);


  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle" >Breakfast</span>
            <h2 className='card-title' >Maggi</h2>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos totam officiis, dolorum sint recusandae dolor maiores ex nemo, libero nesciunt voluptatem, veritatis illum officia minus accusantium ab repudiandae magnam beatae?</span>
            <div className='card-read'>Read</div>
          </div>
          {/* <img src="/images/maggi.jpg" alt="images" className='card-media' /> */}
          <span className='card-tag subtle'>Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Restaurant;