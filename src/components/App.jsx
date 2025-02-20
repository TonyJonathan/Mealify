import "../styles/App.css";
import Banner from "./Banner";
import Selection from "./Selection";
import MealSelection from "./MealSelection";
import React from "react";
import { MenuProvider } from "./contexts/MenuContext";
import { SelectionProvider } from "./contexts/SelectionContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ServingsProvider } from "./contexts/ServingsContext";

function AppContent() {
  return (
    <>
      <Banner />
      <Selection />
      <MealSelection />
    </>
  );
}

function App() {
  return (
    <MenuProvider>
      <SearchProvider>
        <SelectionProvider>
          <ServingsProvider>
            <AppContent />
          </ServingsProvider>
        </SelectionProvider>
      </SearchProvider>
    </MenuProvider>
  );
}

export default App;
