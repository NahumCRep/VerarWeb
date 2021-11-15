import React, { useState } from 'react';
// import '../../css/home-styles/promotioncard.css';
import '../../assets/css/home-styles/promcard.css';

const onHover = (e) => {
    e.target.style.top = '65px';
    // console.log(image);
}

const leaveHover = (e) => {
    e.target.style.top = '75px';
}


const InfCard = (props) => {
    const [open,setOpen] = useState(false);
    return(
        <div className="card-space">
            <div className="infocard-container">
                <div className="card-border b-top"></div>
                <div className="card-border b-top-left"></div>
                <div className="card-border b-bot"></div>
                <div className="card-border b-bot-right"></div>
                <div className="crd-title ">
                    <label>{props.title}</label>
                    <img
                        alt={props.img} 
                        style={{"width":`${props.w}`,"height":`${props.h}`}}
                        src={props.img}
                        onMouseEnter={onHover}
                        onMouseLeave={leaveHover}
                    />
                    <img 
                        src={props.blob}
                        alt="blob" 
                    />
                    <i 
                        className={`fas fa-chevron-${open ? 'up':'down'} fa-2x`} 
                        onClick={() => setOpen(!open)}
                    ></i>
                </div>
                <div className={`crd-info ${open ? 'card-open':''}`}>
                    {props.children}
                </div>
            </div>
         </div>
    )
}

export default InfCard;