import React from 'react';
import '../../css/home-styles/point.css';

const Point = (props) => {
    return(
        <div className="chts-div">
                <i className="fas fa-chevron-circle-right fa-2x"></i>
                <p>{props.content}</p>
        </div>
    )
}

export default Point;