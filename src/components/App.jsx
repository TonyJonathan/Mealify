import '../styles/App.css'
import Banner from "./Banner"
import Selection from "./Selection"
import MealSelection from './MealSelection'
import React from "react"
import { MenuProvider } from "./MenuContext"
import { SelectionProvider } from './SelectionContext'
import { SearchProvider, useSearch } from './SearchContext'


function AppContent() {
  
  const { searchValue, setSearchValue } = useSearch();

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
      <SearchProvider>
        <SelectionProvider>
          <AppContent />
        </SelectionProvider>
      </SearchProvider>
    </MenuProvider>
  );
}

export default App;
