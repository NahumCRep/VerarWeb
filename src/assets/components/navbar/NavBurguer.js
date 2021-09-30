import React from 'react';
import '../../css/navbar-styles/navbar-burger.css';

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