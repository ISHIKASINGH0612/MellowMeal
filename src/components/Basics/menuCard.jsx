import React from 'react'
// import { useNavigate } from "react-router-dom";

const MenuCard = ({menuDataContent}) => {
  console.log(menuDataContent);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuDataContent.map((curElem)=>{
      return (<div className="card-container" key={curElem.id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{curElem.id}</span>
            <span className="card-author subtle" >{curElem.category}</span>
            <h2 className='card-title' >{curElem.name}</h2>
            <span>{curElem.description}</span>
            <div className='card-read'>Read</div>
          </div>
          <img src={curElem.image} alt="images" className='card-media' />

           <span className='card-tag subtle'>Order Now</span> 

          {/* const navigate = useNavigate(); */}

{/* <button className="card-tag subtle" onClick={() => navigate("/order")}>
  Order Now
</button> */}

        </div>
      </div>)
    })}

    </section>
      
    </>
  );
};

export default MenuCard;

// import React from 'react'
// import { useNavigate } from "react-router-dom";

// const MenuCard = ({ menuDataContent }) => {

//   const navigate = useNavigate();   // ✅ Correct place

//   return (
//     <>
//       <section className='main-card--cointainer'>
//         {menuDataContent.map((curElem) => {
//           return (
//             <div className="card-container" key={curElem.id}>
//               <div className="card">
//                 <div className="card-body">
//                   <span className="card-number card-circle subtle">{curElem.id}</span>
//                   <span className="card-author subtle">{curElem.category}</span>
//                   <h2 className='card-title'>{curElem.name}</h2>
//                   <span>{curElem.description}</span>
//                   <div className='card-read'>Read</div>
//                 </div>

//                 <img src={curElem.image} alt="food" className='card-media' />

//                 {/* ✅ ORDER BUTTON WORKS NOW */}
//                 <button 
//                   className='card-tag subtle' 
//                   onClick={() => navigate("/order")}
//                 >
//                   Order Now
//                 </button>
                
//               </div>
//             </div>
//           )
//         })}
//       </section>
//     </>
//   );
// };

// export default MenuCard;
