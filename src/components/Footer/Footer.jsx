import './Footer.scss';
import FooterItem from './FooterItem/FooterItem';

const Footer = () => {
  return(
    <menu className="footer-wrapper">
      <div className="footer-social-media">
        <FooterItem name="Instagram" link='#'/>
        <FooterItem name='Google' link='#'/>
        <FooterItem name='Help' link='#' />
      </div>
      <div className="footer-company-details">
        <p>66 Sotheron Road</p>
        <p>Watford</p>
        <p>WD17 2QA</p>
        <a href="https://www.google.com/maps/place/Watford+Expert+Tiling/@51.5805193,-0.175263,10z/data=!4m2!3m1!1s0x0:0xfe6ac0a4091f0931?sa=X&ved=1t:2428&ictx=111">find us on google</a>
      </div>
      <div className="footer-contact-methods">
        <FooterItem name='email' link='watfordexperttiling@gmail.com'/>
        <FooterItem name='Phone Number' link='07547 762499'/>
      </div>
      
      
    </menu>
  )
}

export default Footer;
