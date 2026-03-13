import { useState } from "react";
import "./App.css";
import TypeFilter from "./TypeFilter.jsx";
import SortBar from "./SortBar.jsx";
import CardGrid from "./CardGrid.jsx";

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
    { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
    { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
    { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
    { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
    { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
    { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
    { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
    { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
    { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
    { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
    { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
    { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
    { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
    { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
    { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
    { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
    { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
    { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
    { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
  ];

  //filter by type

  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (type) => {
    setActiveFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const filtered = activeFilters.length
    ? pokemons.filter((b) => activeFilters.includes(b.type))
    : pokemons;

  // sort by hp/attack

  const [sortBy, setSortBy] = useState(null);
  const [sortDir, setSortDir] = useState("desc");

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortBy(field);
      setSortDir("desc");
    }
  };

  const sorted = [...filtered].sort((a, b) =>
    sortBy
      ? sortDir === "desc"
        ? b[sortBy] - a[sortBy]
        : a[sortBy] - b[sortBy]
      : 0,
  );

  const typeColors = {
    Grass: "#78C850",
    Fire: "#F08030",
    Water: "#6890F0",
    Electric: "#F8D030",
    Psychic: "#F85888",
    Normal: "#A8A878",
    Ghost: "#705898",
    Dragon: "#7038F8",
    Fighting: "#C03028",
    Rock: "#B8A038",
  };

  return (
    <div className="app">
      <h1>Explore these:</h1>
      <div>
        <TypeFilter
          typeColors={typeColors}
          activeFilters={activeFilters}
          onToggle={toggleFilter}
          onClear={() => setActiveFilters([])}
        />
        <SortBar
          sortBy={sortBy}
          sortDir={sortDir}
          setSortBy={setSortBy}
          setSortDir={setSortDir}
        />
        <CardGrid beasts={sorted} typeColors={typeColors} />
      </div>
    </div>
  );
}

export default App;
