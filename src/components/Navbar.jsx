import React, { useState } from 'react';
import { RiEyeCloseLine, RiMenu4Line } from 'react-icons/ri'
import './styles/global.scss'

const Navbar = () => {
  
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (

    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <h2><a href="#home">olayide</a></h2>
      </div>
      <ul className="app__navbar-links">
        <li className=""><a href = "#home">About</a></li>
        <li className=""><a href = "#about">Projects</a></li>
        <li className=""><a href = "#menu">Contact</a></li>
      </ul>

      <div className='app__navbar-button'>
        <p><a href="#contact">CONTACT ME</a></p>
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu4Line color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiEyeCloseLine fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-links">
              <li className=""><a href = "#home">About</a></li>
              <li className=""><a href = "#about">Projects</a></li>
              <li className=""><a href = "#menu">Contact</a></li>
            </ul>
          </div>
        )}
        
      </div>
      
    </nav>
  )
};

export default Navbar;
