import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/index.css";
import App from "./App";

const Main = () => {
  const location = useLocation();
  return (
    <div className="page-transition" key={location.pathname}>
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} /> {/* ✅ semua route ditangani App */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
