import React from 'react';
import '../../assets/css/footerstyle/footerlist.css';

const FooterList = (props) => {
    return(
        <div className="footlist-container" >
            <h5>{props.title}</h5>
            <ul className={`footlist-list ${props.flexd === "col" ? 'footer-flx-col':'footer-flx-row'}`}>
                {props.children}
            </ul>
        </div>
    )
}

export default FooterList; 