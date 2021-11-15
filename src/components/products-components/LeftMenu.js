import React, { useState } from 'react';
import '../../assets/css/products-styles/leftmenu.css';
import ProductContext from '../../contexts/ProductContext';
import MenuList from './MenuListjs.json';
import SideMenuItem from './SideMenuItem';

const LeftMenu = () => {
    return(
        <div className="leftmenu-container" >
            <ProductContext.Consumer> 
                {value => (
                    <ul>
                        {MenuList.menuList.map((menuItem, i)=>{
                            return(
                                <SideMenuItem 
                                    key={i}
                                    ky={menuItem.id}
                                    text={menuItem.text}
                                    sublist={menuItem.submenu || []}
                                    onClick={value}
                                />
                            )
                        })}
                    </ul>    
                )}
            </ProductContext.Consumer>
        </div>
    )
}

export default LeftMenu;