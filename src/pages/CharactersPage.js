import React, { useState } from "react";
import CharacterModal from "../components/CharacterModal";
import { characterImages } from "../utils/characterAssets";

const CharactersPage = ({ characters }) => {
  const [selectedChar, setSelectedChar] = useState(null);

  const pcCharacters = characters.filter((c) => c.type === "PC");
  const npcCharacters = characters.filter((c) => c.type === "NPC");

  return (
    <div className="container">
      <div className="section world-header">
        <h1>Characters Astreya</h1>
        <p className="subtitle">PC & NPC penting dalam campaign.</p>
      </div>

      <div className="section">
        <h2>Player Characters</h2>
        <div className="region-logo-grid">
          {pcCharacters.map((char, i) => (
            <div
              key={i}
              className="logo-card"
              onClick={() => setSelectedChar(char)}
            >
              {/* ✅ tampilkan foto karakter */}
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

      <div className="section">
        <h2>Pemimpin Wilayah Astreya</h2>
        <div className="region-logo-grid">
          {npcCharacters.map((char, i) => (
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
