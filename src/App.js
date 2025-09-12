import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./styles/index.css";
import { astreyaData } from "./data/astreyaData";
import { characters } from "./data/characters";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorldPage from "./pages/WorldPage";
import CharactersPage from "./pages/CharactersPage";
import DMNotesPage from "./pages/DMNotesPage";
import QuestLogPage from "./pages/QuestLogPage";


const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        import PageWrapper from "./components/PageWrapper";

<Routes location={location} key={location.pathname}>
  <Route path="/" element={<HomePage />} />
  <Route path="/world" element={<WorldPage />} />
  <Route path="/characters" element={<CharactersPage characters={characters} />} />
  <Route path="/dmnotes" element={<DMNotesPage />} />
  <Route path="/questlog" element={<QuestLogPage />} />
</Routes>

      </AnimatePresence>
    </>
  );
};

export default App;
