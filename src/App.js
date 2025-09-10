import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/index.css";
import { astreyaData } from "./data/astreyaData";
import { characters } from "./data/characters"; // ⬅️ ini wajib
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorldPage from "./pages/WorldPage";
import CityMapPage from "./pages/CityMapPage";
import CharactersPage from "./pages/CharactersPage";
import DMNotesPage from "./pages/DMNotesPage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/world"
            element={
              <PageWrapper>
                <WorldPage />
              </PageWrapper>
            }
          />
          <Route
            path="/citymap"
            element={
              <PageWrapper>
                <CityMapPage astreyaData={astreyaData} />
              </PageWrapper>
            }
          />
          <Route
            path="/characters"
            element={
              <PageWrapper>
                 <CharactersPage characters={characters} />
              </PageWrapper>
            }
          />
          <Route
            path="/dmnotes"
            element={
              <PageWrapper>
                <DMNotesPage />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

// 🔥 Komponen pembungkus dengan animasi
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}   // mulai
      animate={{ opacity: 1, y: 0 }}    // masuk
      exit={{ opacity: 0, y: -20 }}     // keluar
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default App;
