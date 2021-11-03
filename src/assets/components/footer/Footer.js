import React from 'react';
import '../../css/footerstyle/footer.css';
import { Link } from 'react-router-dom';
import vicon from '../../images/icons/verarwhite.png';
import FooterList from './FooterList';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-icon">
                <img src={vicon} alt="verar icon" />
                <div className="footer-navigation">
                    <Link className="footer-nav" to="/">Inicio</Link>
                    <Link className="footer-nav" to="/products">Productos</Link>
                    <Link className="footer-nav" to="/aboutus">Sobre Nosotros</Link>
                </div>
            </div>
            <div className="footer-links">
                <FooterList title="Contactenos" flexd="col">
                    <li><i className="fas fa-phone"></i><label>+000 0000-00000</label></li>
                    <li><i className="fas fa-envelope" title="email"></i><label>verar-oficial@gmail.com</label></li>
                    <li><i className="fas fa-map-marker-alt"></i><label>Chitré, Distrito Chitré, Panamá</label></li>
                </FooterList>
                <FooterList title="Siguenos" flexd="row">
                    <li><Link to="/"><i className="fab fa-facebook-square fa-2x" title="facebook"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-instagram-square fa-2x" title="instagram"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-twitter-square fa-2x" title="twitter"></i></Link></li>
                </FooterList>
            </div>
            <div className="footer-copyright" >
                {/* <img src={vicon} alt="verar icon" /> */}
                <p>Copyright &copy; 2021 | verarhealth.com</p>
            </div>
        </div>
    )
}

export default Footer;