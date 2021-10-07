import React, { Children, useState } from 'react';
import '../../css/home-styles/promotioncard.css';

const PromotionCard = (props) => {
    // const [icon,setIcon] = useState(false);
    const [open,setOpen] = useState(false);

    return(
        <div className="prom-container" onClick={() => setOpen(!open)}>
            <div className="prom-title">
                <label>{props.title}</label>
                <i 
                    className={`fas fa-caret-square-${open ? 'up':'down'} fa-2x`} 
                    onClick={() => setOpen(!open)}
                ></i>
            </div>
            <div className={`prom-info ${open ? 'prom-open':''}`} >
               {props.children}
            </div>
        </div>
    )
}

export default PromotionCard;