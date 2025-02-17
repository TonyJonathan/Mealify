import React, { useContext, createContext, useState } from 'react'

export const selectionStates = [
  { label: "TOUS 🍽️", value: "all" },
  { label: "VIANDES 🥩", value: "meat" },
  { label: "POISSON 🐠", value: "fish" },
  { label: "VÉGÉ 🥗", value: "veggie" }
];

const SelectionContext = createContext() 

export const useSelection = () => {
  return useContext(SelectionContext)
}

export const SelectionProvider = ({ children }) => {
  const [activeSelection, setActiveSelection] = useState(
    selectionStates.find((state) => state.value === "all")
  )

  return (
    <SelectionContext.Provider value={{ activeSelection, setActiveSelection }}>
      { children }
    </SelectionContext.Provider>
  )
}