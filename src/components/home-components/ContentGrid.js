import React from 'react';
import '../../assets/css/home-styles/contentgrid.css';

const ContentGrid = ({children}) => {
    return(
        <div className="contentgrid-container">
            {children}
        </div>
    )
} 

export default ContentGrid;