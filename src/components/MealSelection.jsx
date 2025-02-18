import { MealList } from "../data/MealList"
import "../styles/MealSelection.css"
import React, { useState } from "react"
import Modal from "./Modal"
import "../styles/Modal.css"
import AddButton from "./AddButton"
import { useSelection } from './SelectionContext'
import { useSearch } from './SearchContext'


function MealSelection() {
  const { searchValue } = useSearch()
  const { activeSelection } = useSelection()
  const [openMealId, setOpenMealId] = useState(null)

  const filteredMeals = MealList.filter((meal) => {
    if (activeSelection.value === "all") return meal.name.toLowerCase().includes(searchValue.toLowerCase())
    return (
      meal.type === activeSelection.value &&
      meal.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  return (
    <div className="container">
      {filteredMeals.map((meal) => (
        <div className="mealContainer" key={meal.name}>
          <img
            src={meal.cover}
            alt={meal.name}
            width="252.5px"
            onClick={() => setOpenMealId(meal.id)}
          ></img>
          <div>
            {openMealId === meal.id && (
              <Modal
                isOpen={openMealId}
                onClose={() => setOpenMealId(null)}
                meal={meal}
              />
            )}
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
      ))}
    </div>
  )
}

export default MealSelection