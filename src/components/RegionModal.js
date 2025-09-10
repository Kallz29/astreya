import React, { useEffect } from "react";
import { regionEnvImages } from "../utils/regionAssets";

const RegionModal = ({ region, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!region) return null;

  return (
    <div className="popup-overlay open" onClick={(e) => e.target.classList.contains("popup-overlay") && onClose()}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={regionEnvImages[region.name]} alt={`${region.title} Env`} className="region-env-image"/>
        <h2>{region.title}</h2>
        <p><strong>Julukan:</strong> {region.julukan}</p>
        <p><strong>Deskripsi:</strong> {region.deskripsi}</p>
        <p><strong>Rakyat:</strong> {region.rakyat}</p>
        <p><strong>Pemimpin:</strong> {region.pemimpin}</p>
        <p><strong>Pekerjaan:</strong> {region.pekerjaan}</p>
        <p><strong>Sumber Daya Alam:</strong> {region.sumberDayaAlam}</p>
        <p><strong>Agama:</strong> {region.agama}</p>
      </div>
    </div>
  );
};

export default RegionModal;
