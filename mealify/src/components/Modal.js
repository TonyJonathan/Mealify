import React, { useEffect} from "react";
import "../styles/Modal.css" // Styles pour le modal
import Dropdown from "./Dropdown"
import Ingredients from "./Ingredients"
import Conversion from "./Conversion"
import ingredients from "./Ingredients"

import DishInfo from "./DishInfo";


function Modal({ isOpen, onClose, meal, servingsNumber, setServingsNumber }) {

  if (!isOpen) return null; 
 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => {onClose(); setServingsNumber(1);}}>
          ×
        </button>
        <DishInfo meal={meal} />
        <div className="div-ingredients-title">
          <p className="title-sections">Ingrédients</p>
          <Dropdown servingsNumber={servingsNumber} setServingsNumber={setServingsNumber} />
        </div>
        <div className="div-ingredients">
          {meal.ingredients.map((ingredient) => 
            <div className="div-individual-ingredient" key={ingredient[0]}>
              <img src={Ingredients[ingredient[0]]} alt={ingredient[0]}></img>
              <p>{Conversion(ingredient[1], ingredient[2], servingsNumber)}</p>
              <p>{ingredient[0]}</p>
            </div>
           )}
        </div>
        <div className="ustensils">
          <p className="title-sections">Ustensiles</p> 
          <p className="text-sections">{meal.ustensils}</p>
        </div>
        <div>
          <p className="title-sections">Recette</p>
          {meal.recipe.map((step, index) => 
            <div className="step" key={index}>
              <div className="ingredients-list">
              {Array.isArray(step[1]) ? (
                step[1].map((ingredient) => (
                <img src={ingredients[ingredient]} alt={ingredient} key={ingredient} className="ingredients-picture" />
                ))
)               : null}
              </div>
              <div>
                <p className="step-number">Étape {index + 1}</p>
                <p className="text-sections">{step[0]}</p>
              </div>
            </div>
          )}
          </div>
      </div>
    </div>
  );
}

export default Modal;