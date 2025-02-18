import React, { createContext, useContext, useState, useEffect } from "react"

const MenuContext = createContext()

export const useMenu = () => {
  return useContext(MenuContext)
}

export const MenuProvider = ({ children }) => {
  const savedMenu = localStorage.getItem('menu')
  const [addToMenu, setAddToMenu] = useState(() => (savedMenu ? JSON.parse(savedMenu) : []))
  
  useEffect(() => {
    localStorage.setItem('menu', JSON.stringify(addToMenu))
  }, [addToMenu])
  
  return (
    <MenuContext.Provider value={{ addToMenu, setAddToMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
