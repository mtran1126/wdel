import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

  function CoverageMap({ stationName }) {
    // CHANGE THESE to your county seat or hometown coordinates
    const lat = 39.9168;   // e.g., 40.0379
    const lng = -75.3989;   // e.g., -75.2832

    const position = [lat, lng];

    // 60 dB contour: city-grade coverage (20 mile radius)
    const cityGradeRadius = 32187;    // 20 miles in meters

    // 54 dB contour: fringe coverage (30 mile radius)
    const fringeRadius = 48280;       // 30 miles in meters

    return (
      <div className="coverage-map">
        <h2>{stationName} Coverage Area</h2>
        <p>Showing 60 dB (city-grade) and 54 dB (fringe) signal contours</p>
        <MapContainer
          center={position}
          zoom={9}
          style={{ height: '450px', width: '100%', borderRadius: '12px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {/* 54 dB fringe contour — outer ring */}
          <Circle
            center={position}
            radius={fringeRadius}
            pathOptions={{
              color: '#ff6b6b',
              fillColor: '#ff6b6b',
              fillOpacity: 0.08,
              weight: 2,
              dashArray: '8, 8'
            }}
          >
            <Popup>54 dB — Fringe Coverage (30 mi)</Popup>
          </Circle>

          {/* 60 dB city-grade contour — inner ring */}
          <Circle
            center={position}
            radius={cityGradeRadius}
            pathOptions={{
              color: '#667eea',
              fillColor: '#667eea',
              fillOpacity: 0.15,
              weight: 2
            }}
          >
            <Popup>60 dB — City-Grade Coverage (20 mi)</Popup>
          </Circle>
        </MapContainer>
      </div>
    );
  }

  export default CoverageMap;