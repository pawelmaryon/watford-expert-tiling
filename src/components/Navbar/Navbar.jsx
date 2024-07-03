import './Navbar.scss'
import NavItem from './NavItem/NavItem'

const Navbar = () => {
  return (
  <ul className='navbar-wrapper'>
    <NavItem name='Gallery'/>
    <NavItem name='About'/>
    <NavItem name='Contact'/>
  </ul>
  )
}

export default Navbar;