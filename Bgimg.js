import React from 'react';
import './Style.css'; 
import img from '../Img/Imgfood.jpg';
function FoodBanner() {
  return (
    <div className="food-banner">
      <div className="background-image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h1>Only Quality Food</h1>
        <p> Sed ut perspiciatis unde omnis discover the Iste soluta dolorem libero. Sint vitae dolorum neque ipsa nemo, excepturi adipisci non ratione quos quidem esse libero, id cumque eaque rerum perspiciatis quod, cupiditate quibusdam quae ab illo inventore.</p>
        <div className="buttons">
          <button className="btn1">ViEW MENU</button>
          <button className="btn2">RESERVATION</button>
        </div>
      </div>
    </div>
  );
}

export default FoodBanner;
