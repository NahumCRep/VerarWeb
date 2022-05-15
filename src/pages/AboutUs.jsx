import React from 'react';
import '../css/aboutus-styles/aboutus.css';
import Imglocation from '../assets/images/aboutus/location.jpg';
import AboutUsCard from '../components/aboutus-components/AboutUsCard';
import Location from '../components/aboutus-components/Location';


const AboutUs = () => {
    return(
        <div className="us-page-body">
            <div className="us-page-container">
                <AboutUsCard title="Empresa" algH="h-center">
                    <p>Esta es una Empresa fictícea por lo que <b>NO EXISTE</b>, la información, los productos y servicios que aquí se presentan <b>NO SON REALES</b>.
                    Este sitio web fue realizado a modo de practica utilizando un proyecto universitario como temática.</p>
                    <p>El proyecto, el logo y las imagenes fueron hechas por <a href='https://www.instagram.com/ashlylv11/' target='_blank' rel="noreferrer">Ashly Bethancurt</a></p>
                </AboutUsCard>
                <AboutUsCard title="Misión" algH="h-left">
                    <p>Somos una empresa innovadora, que busca soluciones naturales para aliviar los problemas de salud de nuestros clientes</p>
                </AboutUsCard>
                <AboutUsCard title="Visión" algH="h-left">
                    <p>Ser una marca líder y reconocida a nivel nacional e internacional en productos naturales para fortalecer la salud y el bienestar de nuestros clientes</p>
                </AboutUsCard>
                <AboutUsCard title="Objetivo" algH="h-left">
                    <p>Convertirnos en la marca líder en productos naturales para la salud</p>
                </AboutUsCard>
                <AboutUsCard title="Ubicación" algH="h-center">
                    <p>Estamos ubicados en Calle Dr. Damasco Elías Ulloa, Chitré, Distrito Chitré, Panamá</p>
                    <div className="ubi-container">
                        <Location direction="Calle Dr. Damasco Elías Ulloa" img={Imglocation} latitude="7.9560329" longitude="-80.4314711" />
                    </div>
                </AboutUsCard>
            </div>
        </div>
    )
}

export default AboutUs;