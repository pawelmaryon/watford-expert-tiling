import './NavItem.scss'

const NavItem = (props) => {
  return(
    <>
      <li className='nav-item'>{props.name}</li>
    </>
  )
}

export default NavItem;