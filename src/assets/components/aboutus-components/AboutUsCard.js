import React from 'react';
import '../../css/aboutus-styles/aboutuscard.css';

const AboutUsCard = (props) => {
    return(
        <div className="abtuscard-container">
            <h3 className={props.algH}>{props.title}</h3>
            <div className="separator"></div>
            {props.children}
        </div>
    )
}

export default AboutUsCard;