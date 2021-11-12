import React, {useEffect, useState} from 'react';
import '../../css/products-styles/leftmenu.css';
import MenuList from './MenuListjs.json';
import SideMenuItem from './SideMenuItem';

const AlertBtn = (e) => {
    alert(e.target.value); 
}

const LeftMenu = () => {
    const [dlist, setDlist] = useState(false);
    // useEffect(()=>{
    //     console.log(MenuList.menuList);
    //     MenuList.menuList.map((menuItem)=>{
    //         console.log(menuItem);
    //     })
    // },[])

    return(
        <div className="leftmenu-container" >
            <ul>
                {MenuList.menuList.map((menuItem, i)=>{
                    return(
                        <SideMenuItem 
                            key={i}
                            ky={menuItem.id}
                            text={menuItem.text}
                            sublist={menuItem.submenu || []}
                            onClick={AlertBtn}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default LeftMenu;