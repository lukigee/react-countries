import * as React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/images/marker-icon.png',
});

export const Map = (data) => {
  const position = data[0].latlng;

  return (
    <MapContainer
      style={{ height: '400px', width: '400px' }}
      center={position}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          {data[0].flag} : {data[0].name.common} <br /> Position: [
          {data[0].latlng}]
        </Popup>
      </Marker>
    </MapContainer>
  );
};
