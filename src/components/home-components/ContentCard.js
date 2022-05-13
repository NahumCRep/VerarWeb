import React from 'react';
import '../../css/home-styles/contentcard.css';

const ContentCard = ({title, children}) => {
    return(
        <div className="contentcard-container">
            <h3>{title}</h3>
            <div className="contentcard-body">{children}</div>
        </div>
    )
}

export default ContentCard;