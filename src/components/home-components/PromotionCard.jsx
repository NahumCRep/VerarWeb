import React from 'react';
import '../../css/home-styles/promotioncard.css';

const PromotionCard = (props) => {
    return(
        <div className="promcard-container">
            <div className="promcard-title">
                <h3>{props.title}</h3>
                <img src={props.image} alt="promotion svg" width={props.imgW + "px"} height={props.imgH + "px"} />
            </div>
            <div className="promcard-content flex-row-center">
                {props.children}
            </div>
        </div> 
    )
}

export default PromotionCard;