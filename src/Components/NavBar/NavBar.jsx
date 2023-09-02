import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./NavBar.scss"

const NavBar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='nav_bar' style={{backgroundColor : `${props.type  === "auth" ? "black" : ""} `}}>
        <div className="logo">NutriDiet</div>
        {props.type === "auth" ? null : <div className="link_section">
            <div className="link_section__link">
                <ul>
                <li><Link to="aboutus" >About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="services">Services</Link></li>
                </ul>
            </div>
            <div className="link_section__button">
                <button>Get Started</button>
            </div>
            <div className='hamburger_menu' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            {menuOpen && <div className="hamburger_menu_item">
            <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>}
        </div>}
    </div>
  )
}

export default NavBar