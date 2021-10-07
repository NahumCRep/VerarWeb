import React from 'react';
import '../../css/home-styles/promotionlayout.css';
import PromotionCard from './PromotionCard';
import InfCard from '../home-components/InfCard';
import cupon from '../../images/cupons-white.png';
import extra from '../../images/test_one.png';
import tshirt from '../../images/tshirt1.png';
import blb0 from '../../images/blob0.png';
import blb1 from '../../images/blob1.png';
import blb2 from '../../images/blob2.png';
import blb3 from '../../images/blob3.png';
import blb4 from '../../images/blob4.png';

const blobs = [blb0, blb1, blb2, blb3, blb4];

const PromotionLayout = () => {
    return(
        <div className="layout-container">
            <InfCard title="Muestras de Prueba" img={extra} w="200px" h="150px" blob={blobs[2]}>
                {/* <div className="hola">hola</div>    */}
            </InfCard> 
            <InfCard title="Cupones" img={cupon} w="150px" h="150px" blob={blobs[4]}>
                {/* <div className="hola">hola</div>    */}
            </InfCard> 
            <InfCard className="ly-grid-item" title="Regalos Publicitarios" img={tshirt} w="150px" h="150px" blob={blobs[0]}>
                {/* <div className="hola">hola</div>    */}
            </InfCard> 
        </div>
    )
}

export default PromotionLayout;