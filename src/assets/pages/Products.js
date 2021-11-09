import React from 'react';
import '../css/products-styles/products.css';

const Prodcuts = () => {
    return(
        <div className="products-body">
            <div className="second-nav"></div>
            <div className="product-container">
                <div className="product-side-menu">
                    <ul>
                        <li>Parches</li>
                        <li>Ropa</li>
                        <li>Mascarilla</li>
                        <li>Oficina</li>
                    </ul>
                </div>
                <div className="product-content"></div>
                <div className="product-list"></div>
            </div>
        </div>
    )
}

export default Prodcuts;