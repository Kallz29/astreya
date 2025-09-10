import React from "react";
import { regionImages } from "../utils/regionAssets"; // ⬅️ pakai regionImages

const CharacterModal = ({ character, onClose }) => {
  if (!character) return null;

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
        <h2>{character.name}</h2>
        <p>
          <strong>Type:</strong> {character.type}
        </p>
        <p>
          <strong>Race / Class:</strong> {character.race} / {character.class}
        </p>
        <p>
          <strong>Origin:</strong> {character.origin}
        </p>
        <p>
          <strong>Description:</strong> {character.description}
        </p>

        {/* ✅ Gambar region sesuai origin */}
        {regionImages[character.origin] && (
          <img
            src={regionImages[character.origin]}
            alt={character.origin}
            className="region-logo-img"
          />
        )}
      </div>
    </div>
  );
};

export default CharacterModal;
