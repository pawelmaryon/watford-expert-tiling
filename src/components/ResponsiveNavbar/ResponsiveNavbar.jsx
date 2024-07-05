import { useState, useEffect } from 'react';
import './ResponsiveNavbar.scss';
import Navbar from '../Navbar/Navbar';
import NavButton from '../NavButton/NavButton';

const ResponsiveNavbar = () => {
  const [isMobile, setISMobile] = useState(window.innerWidth <= 768);

  useEffect(() =>{
    const handleResize = () => {
      setISMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return(
    <>
      {isMobile ? (
        <NavButton/>
        ) :  (<Navbar />)}
    </>
  )
};

export default ResponsiveNavbar;