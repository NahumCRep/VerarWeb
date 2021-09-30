import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar-styles/navbar.css';
import logo from '../../images/logo-noletters.png';
import NavBurguer from './NavBurguer';

const Navbar = () => {
    const [active , setActive] = useState(false);
    const handleOpen = () => setActive(!active);
    const closeMenu = () => setActive(false);

    return(
        <nav className="navbar-container">
            <NavLink className="navbar-logo" to="/" exact>
                <img src={logo} alt="logo" />
                <h5>VERAR</h5>
                <h6>alivio natural</h6>
            </NavLink>
            <div className={`navbar-links ${active ? 'menu-open' : 'menu-close'}`}>
                <NavLink 
                    className="nav-link" 
                    to="/" 
                    activeClassName="navlink-active" 
                    exact
                    onClick={closeMenu}
                >
                    Home
                </NavLink>
                <NavLink 
                    className="nav-link" 
                    to="/products" 
                    activeClassName="navlink-active"
                    onClick={closeMenu}
                >
                    Products
                </NavLink>
                <NavLink 
                    className="nav-link" 
                    to="/aboutus" 
                    activeClassName="navlink-active"
                    onClick={closeMenu}
                >
                    About Us
                </NavLink>
            </div>
            <NavBurguer mode={active} onClick={handleOpen} />
        </nav>   
    )
}

export default Navbar;