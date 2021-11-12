import React from 'react';
import '../css/products-styles/products.css';

import LeftMenu from '../components/products-components/LeftMenu';
import ProductCard from '../components/products-components/ProductCard';
import gorra from '../images/productos/gorras/gorra-b-1.jpg';

const Products = () => {
    return(
        <div className="products-body">
            {/* <div className="second-nav">
                <button>Productos</button>
                <div>
                    <input />
                </div> 
            </div> */}
            <div className="product-container">
                <div className="product-side-menu">
                    <LeftMenu />
                </div>
                <div className="product-content">
                    <ProductCard 
                        title="Gorra Blanca" 
                        price="1.25"
                        image={gorra} 
                    />
                </div>
                <div className="product-list"></div>
            </div>
        </div>
    )
}

export default Products;