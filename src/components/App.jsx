import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import React, { useState } from "react"
import { MenuProvider } from "./MenuContext"

function AppContent() {
  // Récupération des valeurs depuis le contexte
  const [activeSelection, setActiveSelection] = useState("TOUS 🍽️");
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} />
      <Selection activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
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
