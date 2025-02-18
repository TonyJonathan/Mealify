import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import React from "react"
import { MenuProvider } from "./MenuContext"
import { SelectionProvider } from './SelectionContext'
import { SearchProvider } from './SearchContext'


function AppContent() {

  return (
    <>
      <Banner />
        <Selection />
      <MealSelection />
    </>
  )
}

function App() {
  return (
    <MenuProvider>
      <SearchProvider>
        <SelectionProvider>
          <AppContent />
        </SelectionProvider>
      </SearchProvider>
    </MenuProvider>
  )
}

export default App
