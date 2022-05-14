import React from 'react';
import '../../css/home-styles/promotionlayout.css';
import PromotionCard from './PromotionCard';

import cupon from '../../assets/images/cupons-white.png';
import extra from '../../assets/images/test_one.png';
import tshirt from '../../assets/images/tshirt1.png';

const PromotionLayout = () => {
    return(
        <div className="layout-container">
            <PromotionCard title="Muestras" image={extra} imgW="200" imgH="150" crd="4">
                <p>Entrega de muestras gratuitas y limitadas de los parches de salvia VERAR para su prueba</p>
            </PromotionCard>
            <PromotionCard title="Cupones" image={cupon} imgW="140" imgH="140" crd="3">
               <p>Cupones de <b>10</b>, <b>30</b> y <b>50%</b> de descuento a nuestros clientes</p>
            </PromotionCard>
            <PromotionCard title="Regalos Prublicitarios" image={tshirt} imgW="140" imgH="140"  crd="2">
                <p>Entrega de artículos útiles con nuestro logo y eslogan a nuestros clientes más frecuentes</p>
                {/* <a href="/products">ver..</a> */}
            </PromotionCard>
        </div>
    )
}

export default PromotionLayout;