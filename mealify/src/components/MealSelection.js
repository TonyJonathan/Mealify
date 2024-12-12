import { MealList } from "../datas/MealList";
import "../styles/MealSelection.css"
import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Modal.css"


function MealSelection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servingsNumber, setServingsNumber] = useState(2);
  return (
      <div className="container">
        {MealList.map((meal) => 

          <div className="mealContainer">
            <img src={meal.cover} alt={meal.name} width="452.5px"
              onClick={() => setIsModalOpen(true)}>
            </img>
            <div>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} meal={meal}  servingsNumber={servingsNumber} setServingsNumber={setServingsNumber} />
            </div>
            <p className="mealTitle">{meal.name}</p>
            <div className="nutritionalValuesContainer">
              <p className="nutritionalValues">Calories {meal.kcal}</p>
              <p className="nutritionalValues">Protéines {meal.proteins}</p>
              <p className="nutritionalValues">Glucides {meal.carbohydrates}</p>
              <p className="nutritionalValues">Graisses {meal.lipids}</p>
            </div>
            <p className="addMeal">Ajouter</p>
          </div>
          
        )}

      </div>
    )
}

export default MealSelection