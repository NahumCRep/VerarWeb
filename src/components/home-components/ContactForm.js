import React from 'react';
import '../../css/home-styles/contactform.css';

const ContactForm = (props) => {
    return(
        <div id="home-conctfrm" className="contactf-container">
            <h3 className="contact-title" >CONTACTAR</h3>
            <div className="contactf-body">
                <div className="contact-links">
                    {/* <h3>CONTACTAR</h3> */}
                    <p> Escríbanos sobre cualquier consulta que tenga sobre los productos y siganos en nuestras redes para estar al tanto de nuestras activiades y ofertas </p>
                    <ul>
                        <li><a href="/"><i className="fab fa-facebook-square" title="facebook"></i>verar-fb</a></li>
                        <li><a href="/"><i className="fab fa-instagram-square" title="instagram"></i>verar-ig</a></li>
                        <li><a href="/"><i className="fab fa-twitter-square" title="twitter"></i>verar-tw</a></li>
                        {/* <li><i className="fas fa-envelope" title="email"></i><label>verar-oficial@gmail.com</label></li> */}
                    </ul>
                </div>
                <form className="contact-form">
                    {/* <h3>CONTACTAR</h3> */}
                    <input className="contact-input" type="text" placeholder="Nombre" />
                    <input className="contact-input" type="email" placeholder="Email" />
                    <input className="contact-input" type="text" placeholder="Asunto" />
                    <textarea ></textarea>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
} 

export default ContactForm;