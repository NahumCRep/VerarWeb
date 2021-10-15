import React from 'react';
import '../css/aboutus-styles/aboutus.css';
import usimage from '../images/aboutus/us-page.jpg';
import AboutUsCard from '../components/aboutus-components/AboutUsCard';


const AboutUs = () => {
    return(
        <div className="us-page-body">
            <div className="abtUs-body">
                <div className="abtUs-img">
                    <img src={usimage} alt="us page image" />
                </div>
                <div className="abtUs-content">
                    <AboutUsCard title="Misión">
                        Somos una empresa innovadora, que busca soluciones naturales para aliviar los problemas de salud de nuestros clientes
                    </AboutUsCard>
                    <AboutUsCard title="Visión">
                        Ser una marca líder y reconocida a nivel nacional e internacional en productos naturales para fortalecer la salud y el bienestar de nuestros clientes
                    </AboutUsCard>
                    <AboutUsCard title="Objetivo">
                        Convertirnos en la marca líder en productos naturales para la salud
                    </AboutUsCard>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#009fe3" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default AboutUs;