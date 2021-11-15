import { plugins } from 'pretty-format';
import React from 'react';
import '../../assets/css/products-styles/prodbtn.css';

const showPlus = (condition) => {
    if(condition) return <i className="fas fa-plus"></i>;
}

const ProdBtn = (props) => {
    return(
        <button 
            className={`${props.cls == "secondary" ? 'prod-btn-scd':'prod-btn-item'}`}
            value={props.text.toLowerCase()}
            onClick={props.click}
        >
                {props.text}
                {showPlus(props.plus)}
        </button>
    )
}

export default ProdBtn;