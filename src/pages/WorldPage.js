import React, { useState } from "react";
import { astreyaData } from "../data/astreyaData";
import RegionModal from "../components/RegionModal";
import heroImage from "../assets/astreya.png";
import { regionImages } from "../utils/regionAssets";

const WorldPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="container">
      <div className="section world-header">
        <h1>Peta Astreya & Wilayahnya</h1>
        <p className="subtitle">Telusuri setiap wilayah di Astreya.</p>
      </div>

      <div className="section map-image-section">
        <img src={heroImage} alt="Peta Astreya" className="hero-image map-image" />
      </div>

      <div className="section region-logo-grid">
        {astreyaData.regions.map((region, index) => (
          <div
            key={index}
            className="logo-card"
            onClick={() => setSelectedRegion(region)}
          >
            <img
              src={regionImages[region.name]}
              alt={region.title}
              className="region-logo"
            />
            <h2>{region.title}</h2>
          </div>
        ))}
      </div>

      {selectedRegion && (
        <RegionModal region={selectedRegion} onClose={() => setSelectedRegion(null)} />
      )}
    </div>
  );
};

export default WorldPage;
