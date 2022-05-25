import React from 'react';
import '../../css/home-styles/point.css';
import { FaArrowCircleRight } from 'react-icons/fa'

const Point = (props) => {
    return (
        <div className="chts-div">
            <FaArrowCircleRight size={25} />
            <p>{props.content}</p>
        </div>
    )
}

export default Point;