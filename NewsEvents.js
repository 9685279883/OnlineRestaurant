import React from 'react';
import './Style.css'; 
import img7 from '../Img/img7.png';
import img8 from  '../Img/img8.png';
import img9 from '../Img/img9.png';

function ThreeColumnLayout() {
  return (
    <div className="three-column-layout">
      <p>DON'T MISS</p>
      <h2>Our News and Events</h2>
      <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellat debitis accusamus quam deserunt temporibus culpa dignissimos rerum ad nulla.</p>
      <div className="column">
        <img src={img7} alt="Image 1" />
        <h5>Nunc Volutpat Venenatis</h5>
        <p className='cat'>CATEGORY</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus totam doloremque dolor nisi expedita? Nesciunt unde tempore nulla. Praesentium, voluptas.</p>
      </div>
      <div className="column">
        <img src={img8} alt="Image 2" />
        <h5>Vestibulum Nisi Felis</h5>
        <p className='cat'>CATEGORY</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus totam doloremque dolor nisi expedita? Nesciunt unde tempore nulla. Praesentium, voluptas.</p>
      </div>
      <div className="column">
        <img src={img9} alt="Image 3" />
        <h5>Proin Eu Auge Efficitur</h5>
        <p className='cat'>CATEGORY</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus totam doloremque dolor nisi expedita? Nesciunt unde tempore nulla. Praesentium, voluptas.</p>
        
      </div>
    </div>
  );
}

export default ThreeColumnLayout;
