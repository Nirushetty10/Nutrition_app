import React from 'react';
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className='nav_bar'>
        <div className="logo">NutriDiet</div>
        <div className="link_section">
            <div className="link_section__link">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="link_section__button">
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar