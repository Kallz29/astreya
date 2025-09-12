import React, { useState, useEffect } from "react";
import { regionEnvImages, regionImages } from "../utils/regionAssets";
import { cityRegions } from "../utils/cityMapAssets";
import "../styles/popup.css";

const RegionModal = ({ region, onClose }) => {
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!region) return null;

  const handleUnlock = () => {
    const city = cityRegions.find((c) => c.name === region.name);
    if (city && password === city.password) {
      setUnlocked(true);
    } else {
      setAlert("❌ Password salah!");
      setTimeout(() => setAlert(null), 1500);
    }
  };

  return (
    <div
      className="popup-overlay open"
      onClick={(e) =>
        e.target.classList.contains("popup-overlay") && onClose()
      }
    >
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {!unlocked ? (
          <>
            {/* Gambar environment */}
            <img
              src={regionEnvImages[region.name]}
              alt={`${region.title} Env`}
              className="region-env-image"
            />

            {/* Info */}
            <div className="region-info">
  {/* Logo polos tanpa container */}
{/* Langsung logo sesuai ukuran asli */}
  <img
  src={regionImages[region.name]}
  alt={`${region.title} Logo`}
  className="region-logo"
/>


              <h2>{region.title}</h2>
              <p><strong>Julukan:</strong> {region.julukan}</p>
              <p><strong>Deskripsi:</strong> {region.deskripsi}</p>
              <p><strong>Rakyat:</strong> {region.rakyat}</p>
              <p><strong>Pemimpin:</strong> {region.pemimpin}</p>
              <p><strong>Pekerjaan:</strong> {region.pekerjaan}</p>
              <p><strong>Sumber Daya Alam:</strong> {region.sumberDayaAlam}</p>
              <p><strong>Agama:</strong> {region.agama}</p>
            </div>

            {/* Input password */}
            <div className="citymap-access">
              <h3 style={{ color: "#f39c12" }}>Buka City Map</h3>
              <div className="citymap-access-input">
                <input
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="citymap-password-input"
                />
                <button className="citymap-unlock-btn" onClick={handleUnlock}>
                  Unlock
                </button>
              </div>
              {alert && <div style={{ marginTop: 10, color: "red" }}>{alert}</div>}
            </div>
          </>
        ) : (
          <>
            {/* City Map fullscreen */}
            <div className="citymap-popup">
              <img
                src={cityRegions.find((c) => c.name === region.name).image}
                alt={`Peta ${region.title}`}
                className="citymap-image"
              />
            </div>

            {/* Legend dengan efek */}
            <div className="citymap-legend">
              <h4>Legenda Wilayah {region.title}</h4>
              <ol>
  {region.legend.slice(0, 5).map((item, idx) => {
    // pisahkan angka + titik di depan
    const match = item.name.match(/^(\d+\.)\s*(.*)$/);
    const numberPart = match ? match[1] : "";
    const textPart = match ? match[2] : item.name;

    return (
      <li
        key={idx}
        className="legend-item"
        style={{ animationDelay: `${idx * 0.15}s` }}
      >
        {numberPart && (
          <span className="legend-number">{numberPart}</span>
        )}
        {textPart}
      </li>
    );
  })}
</ol>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegionModal;
