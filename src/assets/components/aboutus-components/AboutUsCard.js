import React from 'react';
import '../../css/aboutus-styles/aboutuscard.css';

const AboutUsCard = (props) => {
    return(
        <div className="abtuscard-container">
            <h3>{props.title}</h3>
            <div className="separator"></div>
            <p>{props.children}</p>
        </div>
    )
}

export default AboutUsCard;