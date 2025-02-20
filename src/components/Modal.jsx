import React from "react";
import "../styles/Modal.css";
import DishInfo from "./DishInfo";
import IngredientsSection from "./IngredientsSection";
import RecipeSection from "./RecipeSection";
import useAddDish from "./addDish";
import { useServings } from "./contexts/ServingsContext";

function Modal({ isOpen, onClose, meal }) {
  const { servingsNumber, setServingsNumber } = useServings();
  const addDish = useAddDish();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={() => {
            onClose();
            setServingsNumber(1);
          }}
        >
          ×
        </button>
        <DishInfo meal={meal} />
        <IngredientsSection meal={meal} />
        <RecipeSection meal={meal} />
        <button
          className="addButton"
          onClick={() => {
            addDish(meal, servingsNumber);
            onClose();
            setServingsNumber(1);
          }}
        >
          Ajouter {servingsNumber > 1 ? `x ${servingsNumber}` : null}
        </button>
      </div>
    </div>
  );
}

export default Modal;
