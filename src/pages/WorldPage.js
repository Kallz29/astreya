import React, { useState } from "react";
import { astreyaData } from "../data/astreyaData";
import RegionModal from "../components/RegionModal";
import heroImage from "../assets/astreya.png";

const WorldPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="container">
      {/* Header */}
      <div className="section world-header">
        <h1>Peta Astreya & Wilayahnya</h1>
        <p className="subtitle">
          Klik pada peta untuk menjelajahi detail tiap wilayah.
        </p>
      </div>

      {/* Peta Utama */}
      <div className="section map-image-section relative">
        <img
          src={heroImage}
          alt="Peta Astreya"
          className="hero-image map-image"
        />

        {astreyaData.regions.map((region, index) => (
          <button
            key={index}
            className="pinpoint"
            style={{
              top: region.coords.top,
              left: region.coords.left,
            }}
            onClick={() => setSelectedRegion(region)}
          >
            <span className="pin-icon"></span>
            <span className="pin-shadow"></span>
          </button>
        ))}
      </div>

      {selectedRegion && (
        <RegionModal
          region={selectedRegion}
          onClose={() => setSelectedRegion(null)}
        />
      )}
    </div>
  );
};

export default WorldPage;
