import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import { useState } from "react"
import React from "react"

function App() {
  const [activeSelection, setActiveSelection] = useState("TOUS 🍽️");
  const [searchValue, setSearchValue] = useState('')
  const [addToMenu, setAddToMenu] = useState([])

  return (
    <>
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} addToMenu={addToMenu} setAddToMenu={setAddToMenu} />
      <Selection activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
      <MealSelection activeSelection={activeSelection} searchValue={searchValue} addToMenu={addToMenu} setAddToMenu={setAddToMenu} />
    </>
  )
}

export default App;
