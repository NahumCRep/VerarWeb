import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../css/aboutus-styles/location.css';

const Location = ({ direction, img, latitude, longitude }) => {
    const [showi, setShowi] = useState(false);
    const position = [latitude, longitude];
    return (
        <div className="location-container">
            <div className={`location-image-container ${showi ? 'loc-img-open' : ''}`}>
                <img className={`location-img ${showi ? 'loc-img-show':''}`} src={img} alt="location" />
            </div>
            <div className="map-container">
                <MapContainer style={{ width: '100%', height: '100%' }} center={position} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                        eventHandlers={{
                            click: (e) => {
                                setShowi(!showi);
                            },
                        }}
                    >
                        <Popup>
                            {direction}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Location;