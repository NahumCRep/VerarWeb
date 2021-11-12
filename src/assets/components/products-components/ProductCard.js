import React from 'react';
import '../../css/products-styles/productcard.css';

const ProductCard = (props) => {
    return(
        <div className="pcard-container">
            <div className="pcard-img">
                <img src={props.image} />
            </div>
            <div className="pcard-content">
                <div className="pcard-title">
                    <h4 onClick={() => alert('titulo')} >{props.title}</h4>
                </div>        
                <div className="pcard-price">
                    <label>precio unitario:</label>
                    <label>{`$ ${props.price}`}</label>
                </div>
            </div>
            <div className="pcard-button-cont">
                <button>Agregar</button>
            </div>
        </div>
    )
}

export default ProductCard;