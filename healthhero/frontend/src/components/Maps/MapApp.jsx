import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ResFormCard from "../Restform/restformcard";
import "./MapApp.css";

function MapApp({ restaurant }) {
  useEffect(() => {
    console.log(restaurant);
  }, [restaurant]);
  // const position = [rest.latitude, rest.longitude];

  const position = [40.67, -90.78];
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* <ResFormCard latitude={latitude} longitude={longitude} /> */}
    </div>
  );
}

export default MapApp;
