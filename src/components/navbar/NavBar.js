import React, { useState } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './DropDown';
import Logo from '../../assets/icons/logo.svg';
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src={Logo}   alt="Logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times-circle' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Students
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/hiretalents'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Hire Talents
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/courses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/blog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
         
        
          
        </ul>
       
        
      </nav>
    </>
  );
}

export default Navbar;