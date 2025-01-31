import "../styles/Modal.css"
import React from 'react'
import "../styles/IngredientsList.css"
import { MealList } from "../data/MealList"
import Conversion from "./Conversion"
import { getImagePath } from "./Ingredients"

function IngredientList({ isOpen, onClose, addToMenu }) {
  
  const list = [];
  addToMenu.forEach((dish) => {
    const meal = MealList.find((mealItem) => mealItem.name === dish.name);
    if (meal) {
      meal.ingredients.forEach((ingredient) => { 
        const existingIngredient = list.find((item) => item[0] === ingredient.name); 
        existingIngredient ? (existingIngredient[1] += (Number(ingredient.quantity) * dish.quantity)) :
          list.push([ingredient.name, Number(ingredient.quantity) * dish.quantity, ingredient.unity])
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
            const [name, quantity, unity] = ingredient; 
            return (
              <div className="ingredient" key={name}>
                <img src={getImagePath(name)} alt={name} />
                <p>{name}: {Conversion(quantity, unity, 1)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default IngredientList