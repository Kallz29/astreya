import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { astreyaData, characters } from './data';
import './style.css';
import DMNotesPage from "./DMNotesPage";

// Import semua gambar (assets)
import GelvaraImage from './assets/Gelvara.png';
import DrenmarImage from './assets/Drenmar.png';
import LembaraImage from './assets/Lembara.png';
import NalarraImage from './assets/Nalarra.png';
import HijranaImage from './assets/Hijrana.png';
import ShiranaImage from './assets/Shirana.png';
import PasvaraImage from './assets/Pasvara.png';
import KavvaraImage from './assets/Kavvara.png';
import heroImage from './assets/astreya.png';
import coverImage from './assets/Cover.png';
import AlaricImage from './assets/alaric.png';
import BalamImage from './assets/balam.png';
import JayaImage from './assets/jaya.png';
import ElariaImage from './assets/elaria.png';
import ArimantyaImage from './assets/arimantya.png';
import BhaskaraImage from './assets/bhaskara.png';
import ArunaImage from './assets/aruna.png';
import ZaidImage from './assets/zaid.png';
import GromdinImage from './assets/gromdin.png';
import EnvGelvara from './assets/env_gelvara.png';
import EnvDrenmar from './assets/env_drenmar.png';
import EnvLembara from './assets/env_lembara.png';
import EnvNalarra from './assets/env_nalarra.png';
import EnvHijrana from './assets/env_hijrana.png';
import EnvShirana from './assets/env_shirana.png';
import EnvPasvara from './assets/env_pasvara.png';
import EnvKavvara from './assets/env_kavvara.png';
import GelvaraMap from './assets/gelvaramap.png';
import DrenmarMap from './assets/drenmarmap.png';
import LembaraMap from './assets/lembaramap.png';
import NalarraMap from './assets/nalarramap.png';
import HijranaMap from './assets/hijranamap.png';
import ShiranaMap from './assets/shiranamap.png';
import PasvaraMap from './assets/pasvaramap.png';
import KavvaraMap from './assets/kavvaramap.png';

const regionEnvImages = {
  Gelvara: EnvGelvara,
  Drenmar: EnvDrenmar,
  Lembara: EnvLembara,
  Nalarra: EnvNalarra,
  Hijrana: EnvHijrana,
  Shirana: EnvShirana,
  Pasvara: EnvPasvara,
  Kavvara: EnvKavvara,
};

const regionImages = {
  Gelvara: GelvaraImage,
  Drenmar: DrenmarImage,
  Lembara: LembaraImage,
  Nalarra: NalarraImage,
  Hijrana: HijranaImage,
  Shirana: ShiranaImage,
  Pasvara: PasvaraImage,
  Kavvara: KavvaraImage,
};

const characterImages = {
  "Alaric Stormwind": AlaricImage,
  "Kapten Balam": BalamImage,
  "Jaya Volkov": JayaImage,
  "Elaria Cahyarimbun": ElariaImage,
  "Arimantya Cahyamaguna": ArimantyaImage,
  "Raja Bhaskara": BhaskaraImage,
  "Ratu Aruna": ArunaImage,
  "Amir Zaid": ZaidImage,
  "Raja Gromdin 'Tangan Besi'": GromdinImage,
};

// ----------------- HomePage -----------------
const HomePage = () => (
  <div className="container">
    <div className="section home-hero">
      <img src={coverImage} alt="Astreya Campaign Cover" className="cover-image" />
      <h1>Astreya World</h1>
      <p className="subtitle">Selamat datang, petualang, di dunia Astreya.</p>
      <div className="intro-content">
        {astreyaData.home.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

// ----------------- Region Modal -----------------
const RegionInfoModal = ({ region, onClose }) => {
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
        <img src={regionEnvImages[region.name]} alt={`${region.title} Environment`} className="region-env-image"/>
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

// ----------------- WorldPage -----------------
const WorldPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const handleRegionClick = (region) => setSelectedRegion(region);
  const handleClosePopup = () => setSelectedRegion(null);

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
          <div key={index} className="logo-card" onClick={() => handleRegionClick(region)}>
            <img src={regionImages[region.name]} alt={region.title} className="region-logo" />
            <h2>{region.title}</h2>
          </div>
        ))}
      </div>
      {selectedRegion && <RegionInfoModal region={selectedRegion} onClose={handleClosePopup} />}
    </div>
  );
};

// ----------------- CityMapPage -----------------
const CityMapPage = ({ astreyaData }) => {
  const cityRegions = [
    { name: "Gelvara", image: GelvaraMap, password: "esmarabeku" },
    { name: "Drenmar", image: DrenmarMap, password: "rerindanglirien" },
    { name: "Lembara", image: LembaraMap, password: "sinarveritas" },
    { name: "Nalarra", image: NalarraMap, password: "gelombangbadai" },
    { name: "Hijrana", image: HijranaMap, password: "kabutpurba" },
    { name: "Shirana", image: ShiranaMap, password: "daunraksasa" },
    { name: "Pasvara", image: PasvaraMap, password: "sangmatahari" },
    { name: "Kavvara", image: KavvaraMap, password: "besitakluk" },
  ];

  const [unlockedRegions, setUnlockedRegions] = React.useState(() => {
    const saved = sessionStorage.getItem("unlockedRegions");
    return saved ? JSON.parse(saved) : {};
  });

  const [passwords, setPasswords] = React.useState({});
  const [alert, setAlert] = React.useState(null);

  const handlePasswordChange = (regionName, value) => {
    setPasswords((prev) => ({ ...prev, [regionName]: value }));
  };

  const handleUnlock = (region) => {
    if (passwords[region.name] === region.password) {
      const newUnlocked = { ...unlockedRegions, [region.name]: true };
      setUnlockedRegions(newUnlocked);
      sessionStorage.setItem("unlockedRegions", JSON.stringify(newUnlocked));

      setAlert({ message: `Password benar! Legenda ${region.name} terbuka.`, type: "success" });
      setTimeout(() => setAlert(null), 2000);
    } else {
      setAlert({ message: "Password salah!", type: "error" });
      setTimeout(() => setAlert(null), 2000);
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>City Map</h1>

      {cityRegions.map((region, index) => {
        const legendData = astreyaData?.regions?.find(r => r.name === region.name);
        const isUnlocked = unlockedRegions[region.name];

        return (
          <div key={index} style={{ marginBottom: "50px", textAlign: "center" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{region.name}</h2>

            {isUnlocked ? (
              <>
                <img 
                  src={region.image} 
                  alt={`${region.name} Map`} 
                  style={{ width: "100%", maxWidth: "800px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}
                />
                <div className="citymap-legend animateLegend">
                  <h3>Legenda {region.name}</h3>
                  <ul>
                    {legendData?.legend?.map((legendItem, i) => (
                      <li key={i}>{i+1}. {legendItem.name}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div style={{ marginTop: "15px" }}>
                <input 
                  type="password" 
                  placeholder="Masukkan password"
                  value={passwords[region.name] || ""} 
                  onChange={(e) => handlePasswordChange(region.name, e.target.value)} 
                  style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid var(--color-secondary)" }}
                />
                <button 
                  onClick={() => handleUnlock(region)}
                  style={{ marginLeft: "10px", padding: "6px 12px", borderRadius: "6px", backgroundColor: "var(--color-primary)", color: "var(--color-dark)", border: "none", cursor: "pointer" }}
                >
                  Unlock
                </button>
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



// ----------------- Character Modal -----------------
const CharacterModal = ({ character, onClose }) => {
  if (!character) return null;
  return (
    <div className={`popup-overlay open`} onClick={(e) => e.target.classList.contains("popup-overlay") && onClose()}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{character.name}</h2>
        <p><strong>Type:</strong> {character.type}</p>
        <p><strong>Race / Class:</strong> {character.race} / {character.class}</p>
        <p><strong>Origin:</strong> {character.origin}</p>
        <p><strong>Description:</strong> {character.description}</p>
        <img src={characterImages[character.name]} alt={character.name} className="region-logo" />
      </div>
    </div>
  );
};

// ----------------- CharactersPage -----------------
const CharactersPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);
  const pcCharacters = characters.filter(c => c.type === "PC");
  const npcCharacters = characters.filter(c => c.type === "NPC");

  return (
    <div className="container">
      <div className="section world-header">
        <h1>Characters Astreya</h1>
        <p className="subtitle">PC & NPC penting dalam campaign.</p>
      </div>

      <div className="section">
        <h2>Player Characters (PC)</h2>
        <div className="region-logo-grid">
          {pcCharacters.map((char, i) => (
            <div key={i} className="logo-card" onClick={() => setSelectedChar(char)}>
              <img src={characterImages[char.name]} alt={char.name} className="region-logo"/>
              <h2>{char.name}</h2>
              <p>{char.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Non-Player Characters (NPC)</h2>
        <div className="region-logo-grid">
          {npcCharacters.map((char, i) => (
            <div key={i} className="logo-card" onClick={() => setSelectedChar(char)}>
              <img src={characterImages[char.name]} alt={char.name} className="region-logo"/>
              <h2>{char.name}</h2>
              <p>{char.type}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedChar && <CharacterModal character={selectedChar} onClose={() => setSelectedChar(null)} />}
    </div>
  );
};

// ----------------- App -----------------
function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-link">Beranda</Link>
        <Link to="/world" className="nav-link">Peta Astreya</Link>
        <Link to="/characters" className="nav-link">Characters</Link>
        <Link to="/citymap" className="nav-link">City Map</Link>
        <Link to="/dm-notes" className="nav-link">DM Notes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/world" element={<PageWrapper><WorldPage /></PageWrapper>} />
        <Route path="/characters" element={<PageWrapper><CharactersPage /></PageWrapper>} />
        <Route path="/citymap" element={<PageWrapper><CityMapPage astreyaData={astreyaData} /></PageWrapper>} />
        <Route path="/dm-notes" element={<PageWrapper><DMNotesPage /></PageWrapper>} />
      </Routes>
    </>
  );
}

// ----------------- PageWrapper -----------------
const PageWrapper = ({ children }) => (
  <div className="page-transition">{children}</div>
);

export default App;
