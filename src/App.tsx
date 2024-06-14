// CSS
import "./App.css";

// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Font Awesome Packages
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner);

// Pages
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";

// Components
import Header from "./components/Header";
import TypeList from "./pages/TypeList";
import Type from "./pages/Type";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        <Route path="/pokemon/:nomdupokemon" element={<Pokemon />} />
        <Route path="/type-list" element={<TypeList />} />
        <Route path="/type/:type" element={<Type />} />
      </Routes>
    </Router>
  );
}

export default App;
