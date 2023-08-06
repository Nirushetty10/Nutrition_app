import "./footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return <div className="footer_sec">
    <div className="footer_sec__top">
      <div className="section_left">
        <h1>NutriDiet</h1>
        <h4>The last diet plan you will ever need</h4>
      </div>
      <div className="section_right">
        <ul className="navList">
           <h1 className="navListHeading">Help</h1>
           <li>Support</li>
           <li>Knowledges</li>
           <li>Tutorials</li>
        </ul>
        <ul className="navList">
           <h1 className="navListHeading">Services</h1>
           <li>Meal planning</li>
           <li>Sports Guide</li>
           <li>Diet Plan</li>
           <li>Personal Coach</li>
        </ul>
        <ul className="navList">
           <h1 className="navListHeading">Company</h1>
           <li>About Us</li>
           <li>Careers</li>
           <li>Diet Plan</li>
           <li>Contact Us</li>
        </ul>
        <ul className="navList">
           <h1 className="navListHeading">Contact Us</h1>
           <li>info@chatapp.com</li>
           <li>1-800-200-300</li>
           <li>3000, Deer Creeek RD, Palo Alto, CA</li>
        </ul>
      </div>
    </div>
    <div className="footer_sec__bottom">
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
    </div>
  </div>
}

export default Footer;