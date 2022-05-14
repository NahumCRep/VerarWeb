import React from 'react';
import '../../css/home-styles/header.css';
import { Link } from "react-scroll";

const Header = () => {
    return(
        <div className="header-container">
            <div className="header-slogan">
                <p>Productos Totalmente Naturales, pero con un respaldo <b>Netamente Científico</b></p>
                <Link 
                    className="header-btn"
                    to="home-conctfrm"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}
                >CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;
  