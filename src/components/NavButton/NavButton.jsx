import { useState } from 'react';
import './NavButton.scss';
import Navbar from '../Navbar/Navbar';

const NavButton = () => {
  const [menu, setMenu] = useState(false)
  const clickHandler = () => {
    setMenu(!menu)
  }
  return(
    <>
    <button onClick={clickHandler}>button</button>
    {menu && <Navbar />}
    </>
  )
};

export default NavButton;
