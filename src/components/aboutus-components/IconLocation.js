import L from 'leaflet';

const IconLocation = L.icon({
    iconRetinaUrl: require('../../assets/images/icons/location.png').default,
    iconUrl: require('../../assets/images/icons/location.png').default,
    shadowUrl: require('../../assets/images/icons/location.png').default,
    iconSize:     [30, 30], 
    shadowSize:   [50, 64], 
    iconAnchor:   [7, 80], 
    shadowAnchor: [7, 80],  
    popupAnchor:  [-3, -76] 
});

export default IconLocation;