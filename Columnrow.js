
import React from 'react';
import './Style.css'; 
import img1 from '../Img/img1.png';
import img2 from '../Img/img2.png';
import img3 from '../Img/img3.png';
import img4 from '../Img/img4.png';
import img5 from '../Img/img5.png';
import img6 from '../Img/img6.png';


function ThreeColumnLayout() {
  return (
    <div className="three-column-layout">
      <div className="column">
        <p className='rupee'>$26.95</p>
        <h2>Grilled Fillet</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your taste buds and leave you craving for more.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.suscipit! Nihil molestias voluptatum quod quas consequatur omnis cumque commodi velit quaerat, illo, ad nesciunt cum possimus necessitatibus voluptatibus laboriosam
         molestiae perspiciatis dolores ut eveniet.</p>
      </div>
      <div className="column">
        <img src={img1} alt="Delicious Food" />
      </div>
      <div className="column">
        <p className='rupee'>$53.3</p>
        <h2>Chicken Breast</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your taste buds and leave you craving for more.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.suscipit! Nihil molestias voluptatum quod quas consequatur omnis cumque commodi velit quaerat, illo, ad nesciunt cum possimus necessitatibus voluptatibus laboriosam
         molestiae perspiciatis dolores ut eveniet.</p>
      </div>

      <div className="column">
        <img src={img2} alt="Delicious Food" />
      </div> 
      <div className="column">
        <p className='rupee'>$40.5</p>
        <h2>King Crab</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your taste buds and leave you craving for more.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.suscipit! Nihil molestias voluptatum quod quas consequatur omnis cumque commodi velit quaerat, illo, ad nesciunt cum possimus necessitatibus voluptatibus laboriosam
         molestiae perspiciatis dolores ut eveniet.</p>
      </div>
      <div className="column">
        <img src={img3} alt="Delicious Food" />
      </div> 

      <div className="column">
        <p className='rupee'>$40.5</p>
        <h2>Sea Trout</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your taste buds and leave you craving for more.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.suscipit! Nihil molestias voluptatum quod quas consequatur omnis cumque commodi velit quaerat, illo, ad nesciunt cum possimus necessitatibus voluptatibus laboriosam
         molestiae perspiciatis dolores ut eveniet.</p>
      </div>
      <div className="column">
        <img src={img4} alt="Delicious Food" />
      </div>
      <div className="column">
        <p className='rupee'>$22.3</p>
        <h2>Roasted Bakra</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your taste buds and leave you craving for more.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.suscipit! Nihil molestias voluptatum quod quas consequatur omnis cumque commodi velit quaerat, illo, ad nesciunt cum possimus necessitatibus voluptatibus laboriosam
         molestiae perspiciatis dolores ut eveniet.</p>
      </div>

      <div className="column">
        <img src={img5} alt="Delicious Food" />
      </div> 
      <div className="column">
        <p className='rupee'>$22.3</p>
        <h2>Rosted Bakra</h2>
        <p>Indulge in a culinary journey like no other. Our dishes are carefully crafted to satisfy your taste buds and leave you craving for more.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.suscipit! Nihil molestias voluptatum quod quas consequatur omnis cumque commodi velit quaerat, illo, ad nesciunt cum possimus necessitatibus voluptatibus laboriosam
         molestiae perspiciatis dolores ut eveniet.</p>
      </div>
      <div className="column">
        <img src={img6} alt="Delicious Food" />
      </div> 
      
    </div>
  );
}

export default ThreeColumnLayout;

