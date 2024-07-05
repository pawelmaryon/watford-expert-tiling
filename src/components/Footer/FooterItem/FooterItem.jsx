import './FooterItem.scss'

const FooterItem = (props) => {
  return(
    <div className='footer-item-wrapper'>
      <a href={props.link}>{props.name}</a>
    </div>
  )
};

export default FooterItem;