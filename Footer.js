import React from 'react';
import './Style.css'; 
import foodimg from '../Img/Imgfood.jpg';

function FoodLayout() {
  return (
    <div className="food-banner">
    <div className="background-image1">
      <img src={foodimg} alt="" />
    </div>
    <div className="column">
        <div className='box'>
        <div className='pen'>
        <h1>Hours of Operation</h1>
        <p>MON - FRI</p>
        <p>10:00am - 1:00pm</p>
        <p>4:00pm - 10:30pm</p>
        <p>SAT</p>
        <p>3:00pm - 10:30pm</p>
        <p>SUN</p>
        <p>we are closed</p>
        <button className='makebtn'>MAKE A RESERVATION</button>
        </div>
        </div>
      </div>
      <div className="column">
      <div className='box'>
      <form className="form">
          <h2>Drop Us a Line</h2>
          <p className='texts'>Don't be shy. Let us know if you have any question!</p>
          <button className='contbtn'>CONTACT US</button>
          <p className='texts'>Our Newsletter</p>
          <p className='texts'>Dialogue is an essential part of any script</p>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <button type="submit" className="form-button">CONTACT US</button>
        </form>
      </div>
      </div>
  </div>
  );
}

export default FoodLayout;
