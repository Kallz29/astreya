import React, { useState } from "react";
import { dmNotesSections } from "../data/dmNotesData";

const DMNotesPage = () => {
  const storedAuth = sessionStorage.getItem("dmAuthenticated") === "true";
  const storedSections = JSON.parse(
    sessionStorage.getItem("dmOpenSections") || "{}"
  );

  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(storedAuth);
  const [openSections, setOpenSections] = useState(storedSections);
  const [alert, setAlert] = useState(null);

  const handleLogin = () => {
    if (password === "rawr") {
      setAuthenticated(true);
      sessionStorage.setItem("dmAuthenticated", "true");
      setAlert({ message: "Login berhasil!", type: "success" });
    } else {
      setAlert({ message: "Password salah!", type: "error" });
    }
  };

  const toggleSection = (key) => {
    setOpenSections((prev) => {
      const newState = { ...prev, [key]: !prev[key] };
      sessionStorage.setItem("dmOpenSections", JSON.stringify(newState));
      return newState;
    });
  };

 if (!authenticated) {
  return (
    <div className="dmnotes-login-container">
      <div className="dmnotes-login-card">
        <h1>DM Notes Login</h1>
        <p className="login-subtitle">Hanya Dungeon Master yang boleh masuk 🗝️</p>

        <input
          type="password"
          placeholder="Masukkan password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="dmnotes-input"
        />
        <button onClick={handleLogin} className="dmnotes-btn">
          Unlock
        </button>

        {alert && (
          <div className={`alert-popup ${alert.type}`}>
            <span>{alert.message}</span>
            <button onClick={() => setAlert(null)}>×</button>
          </div>
        )}
      </div>
    </div>
  );
}


  return (
    <div className="dmnotes-container">
      <h1>DM Notes – Campaign Astreya</h1>
      <p>Rahasia NPC, encounter, hidden quests, dan catatan campaign.</p>

      {dmNotesSections.map((sec) => (
        <div key={sec.key} className="dm-note-bab">
          <button
            onClick={() => toggleSection(sec.key)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "10px",
              margin: "5px 0",
              background: "#1B1833",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {sec.title} {openSections[sec.key] ? "▲" : "▼"}
          </button>
          {openSections[sec.key] && (
            <div
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                background: "#441752",
                marginBottom: "10px",
              }}
            >
              {sec.content}
            </div>
          )}
        </div>
      ))}

      {alert && (
        <div className={`alert-popup ${alert.type}`}>
          <span>{alert.message}</span>
          <button onClick={() => setAlert(null)}>×</button>
        </div>
      )}
    </div>
  );
};

export default DMNotesPage;
