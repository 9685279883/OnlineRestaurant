import React from 'react';
import './Style.css'; 
import {AiFillStar} from 'react-icons/ai';
function FourColumnLayout() {
  return (
    <div className="four-column-layout">
      <p className='test'>TESTIMONIALS</p>
      <h3>What People are Saying</h3>
      <div className="column">
        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
        <h3>"A Great Find"</h3>
        <p>Begin your culinary journey with our mouthwatering selection of starters. Each dish is expertly crafted to tantalize your taste buds.</p>
        <p>Devi</p>
      </div>
      <div className="column">
      <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
        <h3>"Fabulous food flawless serviece"</h3>
        <p>Indulge in our diverse range of main courses that showcase flavors from around the world. Each dish is a harmonious blend of taste and artistry.</p>
        <p>Bloom</p>
      </div>
      <div className="column">
      <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
        <h3>"Another successful experience"</h3>
        <p>Complete your dining experience with our delectable desserts. From classic favorites to innovative creations, there's something for everyone.</p>
        <p>Extra</p>
      </div>
      <div className="column">
      <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
        <h3>"Speechless"</h3>
        <p>Quench your thirst with our refreshing selection of beverages. Our drinks are crafted to complement the flavors of our dishes perfectly.</p>
        <p>Monarch</p>
      </div>
    </div>
  );
}

export default FourColumnLayout;
