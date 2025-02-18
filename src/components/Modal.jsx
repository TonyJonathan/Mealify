import React, { useState } from "react"
import "../styles/Modal.css" 
import DishInfo from "./DishInfo"
import IngredientsSection from "./IngredientsSection"
import RecipeSection from "./RecipeSection"
import AddDish from "./AddDish"
import { useMenu } from "./MenuContext"  


function Modal({ isOpen, onClose, meal }) {
  const { addToMenu, setAddToMenu } = useMenu()
  const [servingsNumber, setServingsNumber] = useState(1)

  if (!isOpen) return null
 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => {onClose(); setServingsNumber(1);}}>
          ×
        </button>
        <DishInfo
          meal={meal}
        />
        <IngredientsSection
          servingsNumber={servingsNumber}
          setServingsNumber={setServingsNumber}
          meal={meal}
        />
        <RecipeSection
          meal={meal}
        />
        <button className="addButton" onClick={() => {
          AddDish({ meal, addToMenu, setAddToMenu, servingsNumber })
          onClose()
          setServingsNumber(1)
        }}>
          Ajouter {servingsNumber > 1 ? (`x ${servingsNumber}`) : null}
        </button>
      </div>
    </div>
  )
}

export default Modal