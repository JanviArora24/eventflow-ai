import { useEffect, useState } from "react";
import API from "../services/api";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

function Heatmap() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    API.get("/heatmap")
      .then((res) => {
        setPoints(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Hotspots Map</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "center",
          fontSize: "18px",
        }}
      >
        <span>🔴 Critical</span>
        <span>🟠 High</span>
        <span>🟡 Medium</span>
        <span>🟢 Low</span>
      </div>
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
          height: "600px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map((point, index) => (
          <CircleMarker
            key={index}
            center={[point.latitude, point.longitude]}
            radius={5}
            color={
              point.risk === "Critical"
                ? "red"
                : point.risk === "High"
                  ? "orange"
                  : point.risk === "Medium"
                    ? "yellow"
                    : "green"
            }
          >
            <Popup>Risk: {point.risk}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Heatmap;
