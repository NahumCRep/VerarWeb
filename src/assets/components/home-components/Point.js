import React from 'react';
import '../../css/home-styles/point.css';

// const stylePoint = {
//     display: "flex",
//     alignItems: "center",
//     width: "300px",
//     padding: ".5rem",
//     gap: "10px 10px"
// }

const Point = (props) => {
    return(
        <div className="chts-div">
                <i className="fas fa-chevron-circle-right fa-2x"></i>
                <p>{props.content}</p>
        </div>
    )
}

export default Point;