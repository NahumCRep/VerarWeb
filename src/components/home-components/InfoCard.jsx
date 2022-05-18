import React from 'react';
import '../../css/home-styles/infocard.css';
import ImageLazy from '../ImageLazy';

const InfoCard = (props) => {
    return(
        <div className={`info-container ${props.direction}`}>
                <div className="grid-item">
                   {props.children}
                </div>
                <div className="grid-item">
                    <ImageLazy imgSrc={props.imgs} imgAlt="inf imagen"/>
                </div>
        </div>
    )
}

export default InfoCard;