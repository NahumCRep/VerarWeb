import React from 'react';
import '../../css/home-styles/socialmedia.css';

const SocialMedia = () => {
    return(
        <div className="socialmedia-container">
            <a href="/"><i className="fab fa-facebook-square fa-2x" title="facebook"></i></a>
            <a href="/"><i className="fab fa-instagram-square fa-2x" title="instagram"></i></a>
            <a href="/"><i className="fab fa-twitter-square fa-2x" title="twitter"></i></a>
            <a href="/"><i className="fas fa-map-marker-alt fa-2x" title="map"></i></a>
        </div>
    )
}

export default SocialMedia;