import React from 'react';
import './Style.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className='rest'>Restsurant Landing Page</span>
      </div>
      <ul className="nav-list">

        <li className="nav-item"><a href="#">Landing</a></li>
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Gallery</a></li>
        <li className="nav-item"><a href="#">Shop</a></li>
        <li className="nav-item"><a href="#">Blog</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Team</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
