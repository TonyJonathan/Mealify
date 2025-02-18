import AddDish from "./AddDish"
import React from "react"
import { useMenu } from "./MenuContext"  


function AddButton({ meal }) {  
  const { addToMenu, setAddToMenu } = useMenu()
  const mealNumber = (meal) => {
    const dish = addToMenu.find((dish) => dish.name === meal.name)
    return dish ? dish.quantity : 0
  }

  return (
      <>
          {addToMenu.find((dish) => dish.name === meal.name && dish.quantity > 0) ? 
            <div className="addMealSelection">
              <button
                onClick={() => AddDish({ meal, addToMenu, setAddToMenu, servingsNumber: -1 })}
              >
                -
              </button>
              <input
                type="text"
                value={mealNumber(meal)}
                disabled />
              <button
                onClick={() => AddDish({ meal, addToMenu, setAddToMenu, servingsNumber: 1 })}
              >
                +
              </button>
            </div> : 
            <button
              className="addMeal"
              onClick={() => AddDish({ meal, addToMenu, setAddToMenu, servingsNumber: 1 })}            
            >
              Ajouter
            </button>
        }
    </>
  )
}

export default AddButton