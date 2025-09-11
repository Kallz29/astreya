import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">🌌 Astreya</div>

      {/* tombol hamburger muncul di mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/world" className="nav-link" onClick={() => setMenuOpen(false)}>World</Link>
        <Link to="/characters" className="nav-link" onClick={() => setMenuOpen(false)}>Characters</Link>
        <Link to="/citymap" className="nav-link" onClick={() => setMenuOpen(false)}>City Map</Link>
        <Link to="/questlog" className="nav-link" onClick={() => setMenuOpen(false)}>Quest Log</Link>
        <Link to="/dmnotes" className="nav-link" onClick={() => setMenuOpen(false)}>DM Notes</Link>
        

      </div>
    </nav>
  );
};

export default Navbar;
