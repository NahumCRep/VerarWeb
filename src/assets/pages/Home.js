import React from 'react';
import Header from '../components/home-components/Header';
import '../css/home.css';
import SocialMedia from '../components/home-components/SocialMedia';
import InfoCard from '../components/home-components/InfoCard';
import inf_f from '../images/inf-p-0.jpg';
import inf_s from '../images/inf-p-1.jpg';
import inf_t from '../images/inf-p-2.jpg';
import inf_fo from '../images/inf-p-3.png';
import inf_bx from '../images/box.png';
import pack from '../images/box1.png';
import us from '../images/us.png';

import PromotionLayout from '../components/home-components/PromtionLayout';
import Characteristics from '../components/home-components/Characteristics';
import SvgAnimated from '../components/SvgAnimated';
import ContentGrid from '../components/home-components/ContentGrid';
import ContentCard from '../components/home-components/ContentCard';

const images = [inf_f, inf_s, inf_t, inf_fo, inf_bx, pack];


const Home = () => {
    return(
       <div className="home-page">
           <Header />
           <SocialMedia />
           <div className="home-body">
               <InfoCard direction="" imgs={images[4]}>
                    <p>
                        Buscando una alternativa para ayudar a las personas con sus dolencias 
                        hemos creado los <b>parches de salvia VERAR</b>. La base de este es la planta de salvia,
                        la cual desde hace siglos se usa como planta medicinal por sus múltiples propiedades 
                        y como ingrediente de muchos remedios caseros
                    </p>
               </InfoCard>
               <Characteristics />
               <div className="divider">
                   <SvgAnimated />
               </div>
               <div className="content-div">
                   {/* <ContentCard title="Nosotros" nvglink="aboutus"> 
                        <p>Nuestra empresa esta específicamente pensada para proporcionar productos totalmente naturales, pero con un respaldo netamente científico</p>
                        <a href="/aboutus">leer mas..</a>
                   </ContentCard> */}
                   <ContentGrid>
                       <div className="grid__item">
                           <img src={us} alt="" />
                       </div>
                        <ContentCard title="Nosotros" nvglink="aboutus"> 
                            <p>Nuestra empresa esta específicamente pensada para proporcionar productos totalmente naturales, pero con un respaldo netamente científico</p>
                            <a href="/aboutus">leer mas..</a>
                        </ContentCard>
                   </ContentGrid>
               </div>
               {/* <PromotionLayout /> */}
           </div>
           
           <div>Footer</div>
       </div>
    )
}

export default Home;