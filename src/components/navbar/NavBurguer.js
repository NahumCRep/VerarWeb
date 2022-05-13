import React from 'react';
// import '../assets/css/navbar-styles/navbar-burguer.css';
import '../../css/navbar-styles/navbarburguer.css';

const NavBurguer = ({ onClick, mode }) => {
    return(
        <div className="burger-container" onClick={onClick}>
            <div className={`burger-bar b0 b-${mode ? 'active' : ''}`}></div>
            <div className={`burger-bar b1 bm-${mode ? 'active' : ''}`}></div>
            <div className={`burger-bar b2 b-${mode ? 'active' : ''}`}></div>
        </div>
    )
}

export default NavBurguer;