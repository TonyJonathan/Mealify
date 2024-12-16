import React from "react";
import "../styles/Modal.css" // Styles pour le modal
import preparation from "../assets/icons/preparation.svg"
import cooking from "../assets/icons/cooking.svg"
import calories from "../assets/icons/calories.svg"
import Dropdown from "./Dropdown"
import Ingredients from "./Ingredients"
import Conversion from "./Conversion"


function Modal({ isOpen, onClose, meal, servingsNumber, setServingsNumber }) {
   

  if (!isOpen) return null; 
 
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => {onClose(); setServingsNumber(1);}}>
          ×
        </button>
        <img src={meal.cover} alt={meal.name}></img>
                <p className="mealTitle">{meal.name}</p>
                <p className="description">{meal.description}</p>
                <div className="div-informations">
                  <div className="informations">
                    <img src={preparation} alt="knife" width="32px" height="32px"></img>
                    <p className="informations-text">{meal.preparationTime}</p>
                    <p className="informations-text">Préparation</p>
                  </div>
                  <div className="informations">
                    <img src={cooking} alt="knife" width="32px" height="32px"></img>
                    <p className="informations-text">{meal.cookingTime}</p>
                    <p className="informations-text">Cuisson</p>
                  </div>
                  <div className="informations">
                    <img src={calories} alt="knife" width="32px" height="32px"></img>
                    <p className="informations-text">{meal.kcal} kcal</p>
                    <p className="informations-text">Par portion</p>
                  </div>
                </div>
                <div className="div-ingredients-title">
                  <p className="ingredients-title">Ingrédients</p>
                  <Dropdown servingsNumber={servingsNumber} setServingsNumber={setServingsNumber} />
                </div>
                <div className="div-ingredients">
                  {meal.ingredients.map((ingredient) => 
                    <div className="div-individual-ingredient">
                      <img src={Ingredients[ingredient[0]]} alt=""></img>
                      <p>{Conversion(ingredient[1], ingredient[2], servingsNumber)}</p>
                      <p>{ingredient[0]}</p>
                    </div>
                  )}
                </div>
      </div>
    </div>
  );
}

export default Modal;