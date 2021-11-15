import React, {useEffect, useContext} from 'react';
import '../assets/css/products-styles/products.css';

import LeftMenu from '../components/products-components/LeftMenu';
import ProductCard from '../components/products-components/ProductCard';
import gorra from '../assets/images/productos/gorras/gorra-b-1.jpg';

import ProductContext from '../contexts/ProductContext';
import { useState } from 'react/cjs/react.development';

const Products = () => {
    const [category, setCategory] = useState("parches");

    const AlertBtn = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value);
    }
     
    // useEffect(()=>{
    //     alert(category);
    // },[category])

    return(
        <ProductContext.Provider value={AlertBtn}>
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
                        {/* <ProductCard 
                            title="Gorra Blanca" 
                            price="1.25"
                            image={gorra} 
                        /> */}
                    </div>
                    <div className="product-list"></div>
                </div>
            </div>
        </ProductContext.Provider>
    )
}

export default Products;