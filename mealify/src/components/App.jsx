import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import { useState, useEffect } from "react"
import React from "react"

function App() {
  const [activeSelection, setActiveSelection] = useState("TOUS 🍽️");
  const [searchValue, setSearchValue] = useState('')
  const savedMenu = localStorage.getItem('menu')
  const [addToMenu, setAddToMenu] = useState(() => (savedMenu ? JSON.parse(savedMenu) : []))

  useEffect(() => {localStorage.setItem('menu', JSON.stringify(addToMenu))}, [addToMenu])
  



  return (
    <>
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} addToMenu={addToMenu} setAddToMenu={setAddToMenu} />
      <Selection activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
      <MealSelection activeSelection={activeSelection} searchValue={searchValue} addToMenu={addToMenu} setAddToMenu={setAddToMenu} />
    </>
  )
}

export default App;
