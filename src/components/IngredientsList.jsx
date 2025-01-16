import "../styles/Modal.css"
import React from 'react'
import "../styles/IngredientsList.css"
import { MealList } from "../datas/MealList"
import Conversion from "./Conversion"
import ingredients from "./Ingredients"

function IngredientList({ isOpen, onClose, addToMenu }) {
  const list = [];
  addToMenu.forEach((dish) => {
    const meal = MealList.find((mealItem) => mealItem.name === dish.name);
    if (meal) {
      meal.ingredients.forEach((ingredient) => {
        const [name, quantity, unit] = ingredient; 
        const existingIngredient = list.find((item) => item[0] === name); 
        existingIngredient ? (existingIngredient[1] += (Number(quantity) * dish.quantity)) :
          list.push([name, Number(quantity) * dish.quantity, unit])
      });
    }
  });


  if (!isOpen) return null; 
 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-list-background" onClick={(e) => e.stopPropagation()}>
        <div className="modal-list-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
          <p className="title-list">Liste des ingrédients</p>
          {list.map((ingredient) => {
            return (
              <div className="ingredient" key={ingredient[0]}>
                <img src={ingredients[ingredient[0]]} alt={ingredient[0]}></img>
                <p>{ingredient[0]}: {Conversion(ingredient[1], ingredient[2], 1)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default IngredientList