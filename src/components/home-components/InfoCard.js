import React from 'react';
import '../../assets/css/home-styles/infocard.css';

const InfoCard = (props) => {
    return(
        <div className={`info-container ${props.direction}`}>
                <div className="grid-item">
                   {props.children}
                </div>
                <div className="grid-item">
                    <img src={props.imgs} alt="inf imagen"/>
                </div>
        </div>
    )
}

export default InfoCard;