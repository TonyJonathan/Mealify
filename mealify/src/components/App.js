import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import { useState } from "react"

function App() {
  const [activeSelection, setActiveSelection] = useState("TOUS 🍽️");
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} />
      <Selection activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
      <MealSelection activeSelection={activeSelection} searchValue={searchValue} />
    </>
  )
}

export default App;
