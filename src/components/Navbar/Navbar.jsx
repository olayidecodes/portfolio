import React, { useState } from 'react';
import { RiEyeCloseLine, RiMenu4Line } from 'react-icons/ri'
import './Navbar.scss'

const Navbar = () => {
  
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (

    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <h2><a href="#home">olayide</a></h2>
      </div>
      <ul className="app__navbar-links">
        <li className=""><a href = "#About">About</a></li>
        <li className=""><a href = "#Projects">Projects</a></li>
        <li className=""><a href = "#Contact">Contact</a></li>
      </ul>

      <div className='app__navbar-button'>
        <p><a href="#Contact">CONTACT ME</a></p>
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu4Line color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} cursor='pointer' className="toggle_menu"/>

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiEyeCloseLine fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-links-overlay">
              <li className=""><a href = "#About" onClick={() => setToggleMenu(false)} >About</a></li>
              <li className=""><a href = "#Projects" onClick={() => setToggleMenu(false)} >Projects</a></li>
              <li className=""><a href = "#Contact" onClick={() => setToggleMenu(false)} >Contact</a></li>
            </ul>
          </div>
        )}
        
      </div>
      
    </nav>
  )
};

export default Navbar;
