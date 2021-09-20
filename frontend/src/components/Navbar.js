import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }   
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src="../../images/logoQuazar.png" alt="Logo" />
                   
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                       
                            <AnchorLink href="#start" offset={100} className='nav-links'>  Quem nós somos </AnchorLink> 

                    </li>
                    <li className='nav-item'>
                        
                            <AnchorLink href="#middle" offset={100} className='nav-links'> Valores da empresa </AnchorLink>
 
                    </li>
                    
                    <li className='nav-item'>
                       
                            <AnchorLink href="#end" offset={100} className='nav-links'> Fundadores </AnchorLink>

                    </li>
                    

                   
                </ul>
                
            </div>
        </nav>
    </>
  );
}

export default Navbar;