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

        {regionImages[character.origin] && (
          <div className="region-card">
            <div className="region-frame">
              <img
                src={regionImages[character.origin]}
                alt={character.origin}
                className="region-logo-img"
              />
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterModal;
