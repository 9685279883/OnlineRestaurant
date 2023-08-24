import React from 'react';
import img from '../Img/vagetable.png'
import './Style.css';

function TwoColumnLayout() {
  return (
    <div className="two-column-layout">
      <div className="column">
        <p>OUR STORY</p>
        <h2 className="royal">Wellcome to Royal</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi nesciunt tempore, voluptas nam commodi hic enim neque numquam. Quo eligendi, sint quae laboriosam amet quasi possimus ab ipsa ad mollitia,
         error illum corrupti culpa voluptatem natus veritatis porro similique. taste buds and leave you craving for more. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia a ad veniam error dolor alias dolore.
          Labore eveniet voluptate possimus.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sed ea, 
         aliquid sunt atque quae voluptatibus numquam 
         esse reiciendis, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, exercitationem? architecto neque! Quo, aliquam fugiat?</p>
      </div>
      <div className="column">
        <img src={img} alt="Delicious Food" />
      </div>
    </div>
  );
}

export default TwoColumnLayout;
