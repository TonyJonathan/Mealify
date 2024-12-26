import { MealList } from "../datas/MealList";
import "../styles/MealSelection.css"
import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Modal.css"


function MealSelection() {
  const [openMealId, setOpenMealId] = useState(null);
  const [servingsNumber, setServingsNumber] = useState(1);
  const [addToMenu, setAddToMenu] = useState([]); 
  
  return (
      <div className="container">
      {MealList.map((meal) => 
        <div className="mealContainer" key={meal.name}>
          <img src={meal.cover} alt={meal.name} width="252.5px"
            onClick={() => setOpenMealId(meal.id)}>
          </img>
          <div>
            {openMealId === meal.id ? (
              <Modal isOpen={openMealId} onClose={() => setOpenMealId(null)} meal={meal} servingsNumber={servingsNumber} setServingsNumber={setServingsNumber} addToMenu={addToMenu} setAddToMenu={setAddToMenu}  />
            )
              : null
            }
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