import './NavItem.scss'

const NavItem = (props) => {
  const title = props.name
  return(
    <>
      <li className='nav-item'><a href={title}>{title}</a></li>
    </>
  )
}

export default NavItem;
