import React, { useState, useEffect } from 'react';
import '../css/products-styles/products.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LeftMenu from '../components/products-components/LeftMenu';
import ProductCard from '../components/products-components/ProductCard';
import ProductContext from '../contexts/ProductContext';

import gorra from '../assets/images/productos/gorras/gorra-b-1.jpg';

const Products = () => {
    const [category, setCategory] = useState("parches");
    const [jsonData, setJsonData] = useState([]);

    const getProducts = async (cat) => {
        const res = await axios.get(`http://localhost:4000/api/products/${cat}`);
        console.log(res.data);
        console.log(gorra);
        setJsonData(res.data); 
    } 

    const CategoryChanger = (e) => {
        setCategory(e.target.value);
    }

    // selecting category of products to show
    useEffect(()=>{
        getProducts(category);
    },[category])

    return(
        <ProductContext.Provider value={CategoryChanger}>
            <div className="products-body">
                {/* <div className="second-nav">
                    <button>Productos</button>
                    <div>
                        <input />
                    </div> 
                </div> */}
                <Router>
                    <div className="product-container">
                        <LeftMenu />
                        <div className="product-content">
                            {/* <Switch> 
                                <Route to={`/products/${category}`}  />
                            </Switch> */}
                            {jsonData.map((pitem, i)=>{
                                return(
                                    <ProductCard
                                        key={i} 
                                        title={pitem.name} 
                                        price={pitem.price}
                                        image={pitem.images[0]} 
                                    />
                                )
                            })}
                            {/* <ProductCard 
                                title="Gorra Blanca" 
                                price="1.25"
                                image='http://localhost:3000/src/assets/images/productos/gorras/gorra-b-1.jpg'
                            /> */}
                        </div>
                        <div className="product-list"></div>
                    </div>
                </Router>
            </div>
        </ProductContext.Provider>
    )
}

export default Products;