import React from 'react';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import logo from '../../assets/logo.png'
import './Header.scss'

function Header() {
  return (
    <header className='header-wrapper'>
      <div className="menu">
        <img src={logo} alt="" className='logo' />
        <ResponsiveNavbar />
      </div>
      <h1>This is a Header</h1>
    </header>
  );
}

export default Header;