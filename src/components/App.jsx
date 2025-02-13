import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import React, { useState } from "react"
import { MenuProvider } from "./MenuContext"

const selectionStates = [
  { label: "TOUS 🍽️", value: "all" },
  { label: "VIANDES 🥩", value: "meat" },
  { label: "POISSON 🐠", value: "fish" },
  { label: "VÉGÉ 🥗", value: "veggie" }
];

function AppContent() {
  // Récupération des valeurs depuis le contexte
  const [activeSelection, setActiveSelection] = useState(
    selectionStates.find((state) => state.value === "all")
  );

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} />
        <Selection activeSelection={activeSelection} setActiveSelection={setActiveSelection} selectionStates={selectionStates} />
      <MealSelection activeSelection={activeSelection} searchValue={searchValue} />
    </>
  );
}

function App() {
  return (
    <MenuProvider>
      <AppContent />
    </MenuProvider>
  );
}

export default App;
