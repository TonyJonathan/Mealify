import React, { useContext, useState, createContext } from 'react'

const ServingContext = createContext()

export const useServings = () => {
  return useContext(ServingContext)
}

export const ServingsProvider = ({ children }) => {
  const [servingsNumber, setServingsNumber] = useState(1)

  return (
    <ServingContext.Provider value={{ servingsNumber, setServingsNumber }}>
      {children}
    </ServingContext.Provider>
  )
}