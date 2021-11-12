import React , {useState, useEffect} from 'react';
import '../../css/products-styles/sidemenuitem.css';

const SideMenuItem = ({ky, text, sublist, onClick}) => {
    const [isActive, setActive] = useState(false);
    // useEffect(()=>{
    //     return sublist?.length ? setActive(!isActive) : onClick
    // },[])
    return(
        <li className="sideM-li">
            <button 
                className="sideM-button" 
                value={ky} 
                onClick={(e) => sublist?.length ? setActive(!isActive) : onClick(e)}
            >
                {text}
                {sublist?.length > 0 ? <i className={`${isActive ? 'fas fa-minus':'fas fa-plus'}`}></i> : null}    
            </button>
            {sublist && sublist.length > 0 ? (
                <div className={`${isActive ? 'sideM-sublist sl-active':'sideM-sublist'}`}>
                    {sublist.map((btnitem,i)=>{
                        return(
                            <button className="sideM-subbtn" key={i} value={btnitem.id} onClick={onClick}>
                                {btnitem.text}
                            </button>
                        )
                    })}
                </div> 
            ) : null}
        </li>
    )
}
// jovada
// para poder colocar la firma en ese formulario
// ultimo recibo de matricula --- agustina reyes 
export default SideMenuItem;