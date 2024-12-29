import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import { useState } from "react"

function App() {
  const [activeSelection, setActiveSelection] = useState("TOUS 🍽️");
  return (
    <>
      <Banner />
      <Selection activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
      <MealSelection activeSelection={activeSelection} />
    </>
  )
}

export default App;
