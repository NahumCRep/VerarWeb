import React from 'react';
import '../../css/footerstyle/footer.css';
import { Link } from 'react-router-dom';
import vicon from '../../assets/images/icons/verarwhite.png';
import FooterList from './FooterList';
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPhone, FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-icon">
                <img src={vicon} alt="verar icon" />
                <div className="footer-navigation">
                    <Link className="footer-nav" to="/">Inicio</Link>
                    <Link className="footer-nav" to="/products">Producto</Link>
                    <Link className="footer-nav" to="/aboutus">Sobre Nosotros</Link>
                </div>
            </div>
            <div className="footer-links">
                <FooterList title="Contactenos" flexd="col">
                    <li><FaPhone /><label>+000 0000-00000</label></li>
                    <li><MdEmail /><label>verar-oficial@gmail.com</label></li>
                    <li><FaMapMarkerAlt /><label>Chitré, Distrito Chitré, Panamá</label></li>
                </FooterList>
                <FooterList title="Siguenos" flexd="row">
                    <li><Link to="/"><FaFacebookSquare size={25} /></Link></li>
                    <li><Link to="/"><FaInstagramSquare size={25} /></Link></li>
                    <li><Link to="/"><FaTwitterSquare size={25} /></Link></li>
                </FooterList>
            </div>
            <div className="footer-copyright" >
                {/* <img src={vicon} alt="verar icon" /> */}
                <p>Copyright &copy; 2021 | desarrollado por Nahum Casco | proyecto e imagenes por Ashly Bethancourt</p>
            </div>
        </div>
    )
}

export default Footer;