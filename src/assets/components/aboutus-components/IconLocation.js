// import marker from '../../svg/icons/marker.svg';
import L from 'leaflet';

const IconLocation = L.icon({
    // iconSize:     [38, 95], 
    // shadowSize:   [50, 64], 
    // iconAnchor:   [22, 94], 
    // shadowAnchor: [4, 62],  
    // popupAnchor:  [-3, -76] 
    // iconRetinaUrl: require('../../svg/icons/marker.svg').default,
    // iconUrl: require('../../svg/icons/marker.svg').default,
    // shadowUrl: require('../../svg/icons/marker.svg').default,
    iconRetinaUrl: require('../../images/icons/location.png').default,
    iconUrl: require('../../images/icons/location.png').default,
    shadowUrl: require('../../images/icons/location.png').default,
    iconSize:     [30, 30], 
    shadowSize:   [50, 64], 
    iconAnchor:   [7, 80], 
    shadowAnchor: [7, 80],  
    popupAnchor:  [-3, -76] 
});

export default IconLocation;