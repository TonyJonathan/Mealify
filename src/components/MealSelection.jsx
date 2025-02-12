import { MealList } from "../data/MealList";
import "../styles/MealSelection.css"
import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Modal.css"
import AddButton from "./AddButton"


const mealType = {
  "VÉGÉ 🥗": "veggie", 
  "VIANDES 🥩": "meat", 
  "POISSON 🐠": "fish"
}

function MealSelection({ activeSelection, searchValue }) {
  const [openMealId, setOpenMealId] = useState(null);
  const [servingsNumber, setServingsNumber] = useState(1);
  
  const filteredMeals = MealList.filter((meal) => {
    const matchesType = activeSelection === "TOUS 🍽️" || meal.type === mealType[activeSelection];
    const matchesSearch = meal.name.toLowerCase().includes(searchValue.toLowerCase());
    return matchesType && matchesSearch;
  });
  
  return (
      <div className="container">
        {filteredMeals.map((meal) =>     
            <div className="mealContainer" key={meal.name}>
              <img src={meal.cover} alt={meal.name} width="252.5px"
                onClick={() => setOpenMealId(meal.id)}>
              </img>
              <div>
                {openMealId === meal.id ? (
                  <Modal isOpen={openMealId} onClose={() => setOpenMealId(null)} meal={meal} servingsNumber={servingsNumber} setServingsNumber={setServingsNumber}  />
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
                <AddButton meal={meal} />
              </div>
        )}
      </div>
    )
}

export default MealSelection