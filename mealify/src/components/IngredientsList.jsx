import "../styles/Modal.css"
import React from 'react'
import "../styles/IngredientsList.css"
import { MealList } from "../datas/MealList"
import Conversion from "./Conversion"
import ingredients from "./Ingredients"

function IngredientList({ isOpen, onClose, addToMenu }) {
  console.log(addToMenu); 
  if (!isOpen) return null; 
 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-list-background" onClick={(e) => e.stopPropagation()}>
        <div className="modal-list-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
          <p className="title-list">Liste des ingrédients</p>
          {addToMenu.map((dish) => {
            const meal = MealList.find((mealItem) => mealItem.name === dish.name)
            return meal ? (meal.ingredients.map((ingredient) => {
              return (
                <div className="ingredient" key={ingredient[0]}>
                  <img src={ingredients[ingredient[0]]} alt={ingredient[0]}></img>
                  <p>{ingredient[0]}: {Conversion(ingredient[1], ingredient[2], dish.quantity)}</p>
                </div>
              )
            })) : null
          })}
        </div>
      </div>
    </div>
  );
}

export default IngredientList