import { MealList } from "../datas/MealList";
import "../styles/MealSelection.css"
import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Modal.css"
import preparation from "../assets/icons/preparation.svg"
import cooking from "../assets/icons/cooking.svg"
import calories from "../assets/icons/calories.svg"
import cuterly from "../assets/icons/cuterly.svg"
import selector from "../assets/icons/selector.svg"
import Dropdown from "./Dropdown"
import Ingredients from "./Ingredients"

function MealSelection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="container">
        {MealList.map((meal) => 

          <div className="mealContainer">
            <img src={meal.cover} alt={meal.name} width="452.5px"
              onClick={() => setIsModalOpen(true)}>
            </img>
            <div>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <img src={meal.cover} alt={meal.name}></img>
                <p className="mealTitle">{meal.name}</p>
                <p className="description">{meal.description}</p>
                <div className="div-informations">
                  <div className="informations">
                    <img src={preparation} alt="knife" width="45px" height="45px"></img>
                    <p className="informations-text">{meal.preparationTime}</p>
                    <p className="informations-text">Préparation</p>
                  </div>
                  <div className="informations">
                    <img src={cooking} alt="knife" width="45px" height="45px"></img>
                    <p className="informations-text">{meal.cookingTime}</p>
                    <p className="informations-text">Cuisson</p>
                  </div>
                  <div className="informations">
                    <img src={calories} alt="knife" width="45px" height="45px"></img>
                    <p className="informations-text">{meal.kcal} kcal</p>
                    <p className="informations-text">Par portion</p>
                  </div>
                </div>
                <div className="div-ingredients-title">
                  <p className="ingredients-title">Ingrédients</p>
                  <Dropdown />
                </div>
                <div className="div-ingredients">
                  {meal.ingredients.map((ingredient) => 
                    <div className="div-individual-ingredient">
                      <img src={Ingredients[ingredient[0]]} alt=""></img>
                      <p>{ingredient[1]} {ingredient[2]}</p>
                      <p>{ingredient[0]}</p>
                    </div>
                  )}
                </div>
              </Modal>
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