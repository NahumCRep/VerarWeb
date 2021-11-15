import React, { Children, useState } from 'react';
import '../../assets/css/home-styles/promotioncard.css';
import pwv0 from '../../assets/svg/promotion-svg/pwv0.svg';
import pwv1 from '../../assets/svg/promotion-svg/pwv1.svg';
import pwv2 from '../../assets/svg/promotion-svg/pwv2.svg';
import pwv3 from '../../assets/svg/promotion-svg/pwv3.svg';
import pwv4 from '../../assets/svg/promotion-svg/pwv4.svg';

const svglist = [pwv0, pwv1, pwv2, pwv3, pwv4];
const PromotionCard = (props) => {
    // const [icon,setIcon] = useState(false);
    const [open,setOpen] = useState(false);

    return(
        <div className="promcard-container" onClick={() => setOpen(!open)}>
            <div className="promcard-svg-container">
                <img className="promcard-svg" src={svglist[props.crd]} alt="svg image"/>
            </div>
            <div className="promcard-title">
                <h3>{props.title}</h3>
                <img src={props.image} alt="promotion image" width={props.imgW + "px"} height={props.imgH + "px"} />
            </div>
            <div className="promcard-content flex-row-center">
                {props.children}
            </div>
        </div> 
    )
}

export default PromotionCard;