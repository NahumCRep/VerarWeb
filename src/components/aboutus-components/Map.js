import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../assets/css/aboutus-styles/location.css';
// import 'leaflet/dist/leaflet.css';
// import IconLocation from './IconLocation';

const Map = ({direc, lat, lon, handleshowi }) => {
    const position = [lat, lon];
    return (
        <MapContainer style={{ width: '100%', height: '100%' }} center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={position} 
                eventHandlers={{
                    click: (e) => handleshowi
                  }}
            >
                <Popup>
                    {direc}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;