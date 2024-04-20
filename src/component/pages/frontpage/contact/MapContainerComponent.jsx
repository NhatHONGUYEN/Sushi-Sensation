import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const position = [50.0755381, 14.4378005];

const MapContainerComponent = () => {
  return (
    <StyledMapContainer center={position} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Votre emplacement ici. <br /> Cliquez pour plus de détails.
        </Popup>
      </Marker>
    </StyledMapContainer>
  );
};
const StyledMapContainer = styled(MapContainer)`
  height: 48vh;
  border-radius: 15px;
`;
export default MapContainerComponent;
