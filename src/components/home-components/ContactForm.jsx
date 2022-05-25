import React from 'react';
import '../../css/home-styles/contactform.css';
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

const ContactForm = (props) => {
    return(
        <div id="home-conctfrm" className="contactf-container">
            <h3 className="contact-title">CONTACTAR</h3>
            <div className="contactf-body">
                <div className="contact-links">
                    <p> Escríbanos sobre cualquier consulta que tenga sobre los productos y siganos en nuestras redes para estar al tanto de nuestras activiades y ofertas </p>
                    <ul>
                        <li><a href="/"><FaFacebookSquare size={25} />verarpanama</a></li>
                        <li><a href="/"><FaInstagramSquare size={25} /> verarpanama</a></li>
                        <li><a href="/"><FaTwitterSquare size={25} /> verarpanama</a></li>
                    </ul>
                </div>
                <form className="contact-form">
                    <input className="contact-input" type="text" placeholder="Nombre" />
                    <input className="contact-input" type="email" placeholder="Email" />
                    <input className="contact-input" type="text" placeholder="Asunto" />
                    <textarea></textarea>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
} 

export default ContactForm;