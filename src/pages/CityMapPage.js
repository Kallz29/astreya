import React from "react";
import { cityRegions } from "../utils/cityMapAssets";
import "../styles/citymap.css";

const CityMapPage = ({ astreyaData }) => {
  const [unlockedRegions, setUnlockedRegions] = React.useState(() => {
    const saved = sessionStorage.getItem("unlockedRegions");
    return saved ? JSON.parse(saved) : {};
  });

  const [passwords, setPasswords] = React.useState({});
  const [alert, setAlert] = React.useState(null);
  const [justUnlocked, setJustUnlocked] = React.useState(null); // ⬅️ state baru

  const handlePasswordChange = (regionName, value) => {
    setPasswords((prev) => ({ ...prev, [regionName]: value }));
  };

  const handleUnlock = (region) => {
    if (passwords[region.name] === region.password) {
      const newUnlocked = { ...unlockedRegions, [region.name]: true };
      setUnlockedRegions(newUnlocked);
      sessionStorage.setItem("unlockedRegions", JSON.stringify(newUnlocked));
      setAlert({ message: `✅ ${region.name} terbuka.`, type: "success" });

      // set animasi hanya untuk region yang baru dibuka
      setJustUnlocked(region.name);
      setTimeout(() => setJustUnlocked(null), 1500); // reset setelah animasi
    } else {
      setAlert({ message: "❌ Password salah!", type: "error" });
    }
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <div className="citymap-page">
      <h1>City Map</h1>

      {cityRegions.map((region, index) => {
        const legendData = astreyaData?.regions?.find(r => r.name === region.name);
        const isUnlocked = unlockedRegions[region.name];
        const isAnimating = justUnlocked === region.name; // cek apakah baru dibuka

        return (
         <div 
  key={index} 
  className={`citymap-region ${isAnimating ? "region-unlock-anim" : ""}`}
  onAnimationEnd={() => setJustUnlocked(null)}   // ⬅️ reset setelah animasi selesai
>
  <h2>{region.name}</h2>

  {isUnlocked ? (
    <>
      <img 
        src={region.image} 
        alt={`${region.name} Map`} 
        className={`citymap-image ${isAnimating ? "image-anim" : ""}`}
      />
      <div className={`citymap-legend animateLegend ${isAnimating ? "legend-anim" : ""}`}>
        <h3>Legenda {region.name}</h3>
        <ul>
          {legendData?.legend?.map((legendItem, i) => (
            <li key={i}>{legendItem.name}</li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <div className="citymap-password">
      <input 
        type="password"
        placeholder="Masukkan password"
        value={passwords[region.name] || ""} 
        onChange={(e) => handlePasswordChange(region.name, e.target.value)} 
      />
      <button onClick={() => handleUnlock(region)}>Unlock</button>
    </div>
  )}
</div>

        );
      })}

      {alert && (
        <div className={`alert-popup ${alert.type}`}>
          <p>{alert.message}</p>
          <button onClick={() => setAlert(null)}>×</button>
        </div>
      )}
    </div>
  );
};

export default CityMapPage;
