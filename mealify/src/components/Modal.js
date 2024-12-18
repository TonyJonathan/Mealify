import React from "react";
import "../styles/Modal.css" // Styles pour le modal
import ingredients from "./Ingredients"
import DishInfo from "./DishInfo";
import IngredientsSection from "./IngredientsSection";
import RecipeSection from "./RecipeSection";

function Modal({ isOpen, onClose, meal, servingsNumber, setServingsNumber }) {

  if (!isOpen) return null; 
 
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
          ingredients={ingredients}
        />
      <RecipeSection meal={meal} ingredients={ingredients} />
      </div>
    </div>
  );
}

export default Modal;