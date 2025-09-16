import React, { useState } from "react";
import CharacterModal from "../components/CharacterModal";
import { characterImages } from "../utils/characterAssets";

const CharactersPage = ({ characters }) => {
  const [selectedChar, setSelectedChar] = useState(null);

  const pcCharacters = characters.filter((c) => c.type === "PC");
  const leaderCharacters = characters.filter((c) => c.type === "Pemimpin");
  const npcCharacters = characters.filter((c) => c.type === "NPC");
  const enemyCharacters = characters.filter((c) => c.type === "Musuh");

  const renderSection = (title, list) =>
    list.length > 0 && (
      <div className="section">
        <h2>{title}</h2>
        <div className="region-logo-grid">
          {list.map((char, i) => (
            <div
              key={i}
              className="logo-card"
              onClick={() => setSelectedChar(char)}
            >
              <img
                src={characterImages[char.name]}
                alt={char.name}
                className="region-logo"
              />
              <h2>{char.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="container">
      <div className="section world-header">
        <h1>Characters Astreya</h1>
        <p className="subtitle">PC, Pemimpin, NPC, dan Musuh penting dalam campaign.</p>
      </div>

      {renderSection("Para Penjelajah Terpilih", pcCharacters)}
      {renderSection("Pemimpin Wilayah Astreya", leaderCharacters)}
      {renderSection("Sekutu & Pendukung", npcCharacters)}
      {renderSection("Ancaman Astreya", enemyCharacters)}

      {selectedChar && (
        <CharacterModal
          character={selectedChar}
          onClose={() => setSelectedChar(null)}
        />
      )}
    </div>
  );
};

export default CharactersPage;
