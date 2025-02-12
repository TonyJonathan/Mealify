import "../styles/Banner.css"
import logo from "../assets/logo.svg"
import searchLogo from "../assets/searchLogo.png"
import cuterly from "../assets/icons/cuterly.svg"
import React, { useState } from 'react'
import Cart from "./Cart.jsx"
import IngredientList from "./IngredientsList.jsx"
import { useMenu } from "./MenuContext"  


function Banner({ searchValue, setSearchValue }) {
  const { addToMenu } = useMenu();
  const [openCart, setOpenCart] = useState(null); 
  const [openList, setOpenList] = useState(null)
  const mealNumber = addToMenu.reduce((total, meal) => total + Number(meal.quantity), 0)
  
  return (
    <>
      <h1 className="top-banner">Votre menu de la semaine en un clic !</h1>
      <div className="div-logo">
        <img src={logo} alt="mealify"></img>
        <div className="div-search-input">
          <img src={searchLogo} alt="search logo"  className="search-logo"></img>
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          >
          </input>
        </div>
        
        <div>
          {mealNumber > 0 ? <p className="meal-count">{mealNumber}</p> : null } 
          <img src={cuterly} alt="cuterly" className="cuterly" onClick={() => setOpenCart(true)} />
        </div>
      </div>
      <div className="line"></div>
      <Cart isOpen={openCart} onClose={() => setOpenCart(null)}  setOpenList={setOpenList} />
      {openList ? <IngredientList isOpen={openList} onClose={() => setOpenList(null)} /> : null}
    </>
  )
}

export default Banner