import { useState } from 'react';
import './NavButton.scss';
import Navbar from '../Navbar/Navbar';

const NavButton = () => {
  const [menu, setMenu] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const clickHandler = () => {
    setMenu(!menu)
    setIsVisible(!isVisible)
  }
  return(
    <>
    <button onClick={clickHandler} className={ `nav-btn ${isVisible ? 'visible' : 'not-visible'}`} >☰</button>
    {menu && <Navbar />}
    </>
  )
};

export default NavButton;
