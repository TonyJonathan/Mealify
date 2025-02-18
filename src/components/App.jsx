import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import React, { useState } from "react"
import { MenuProvider } from "./MenuContext"
import { SelectionProvider } from './SelectionContext'



function AppContent() {
  
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} />
        <Selection />
      <MealSelection searchValue={searchValue} />
    </>
  );
}

function App() {
  return (
    <MenuProvider>
      <SelectionProvider>
        <AppContent />
      </SelectionProvider>
    </MenuProvider>
  );
}

export default App;
