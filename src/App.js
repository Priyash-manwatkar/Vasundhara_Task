import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
  Rectangle,
  Polygon,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [19.7515, 75.7139]; 

export default function LeafletMapWithLayersControl() {

  const rectangleBounds = [
    [19.9, 75.4],
    [20.1, 75.7],
  ];

  const polygonCoords = [
    [19.5, 75.5],
    [19.6, 75.8],
    [19.4, 76.0],
  ];

  const circleCenter = [19.7, 76.3];

  return (
    <MapContainer center={center} zoom={7} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <LayersControl position="topleft">
   
        <LayersControl.Overlay name="Rectangle" checked>
          <LayerGroup>
            <Rectangle bounds={rectangleBounds} pathOptions={{ color: "red" }} />
          </LayerGroup>
        </LayersControl.Overlay>

      
        <LayersControl.Overlay name="Polygon" checked>
          <LayerGroup>
            <Polygon positions={polygonCoords} pathOptions={{ color: "green" }} />
          </LayerGroup>
        </LayersControl.Overlay>

    
        <LayersControl.Overlay name="Circle" checked>
          <LayerGroup>
            <Circle center={circleCenter} radius={20000} pathOptions={{ color: "blue" }} />
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
