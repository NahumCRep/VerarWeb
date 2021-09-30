import React from 'react';
import '../../css/header-styles/socialmedia.css';

const SocialMedia = () => {
    return(
        <div className="socialmedia-container">
            <a href="/"><i className="fab fa-facebook-square fa-3x" title="facebook"></i></a>
            <a href="/"><i className="fab fa-instagram-square fa-3x" title="instagram"></i></a>
            <a href="/"><i className="fab fa-twitter-square fa-3x" title="twitter"></i></a>
            <a href="/"><i className="fas fa-map-marker-alt fa-3x" title="map"></i></a>
        </div>
    )
}

export default SocialMedia;