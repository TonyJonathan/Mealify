import { MealList } from "../datas/MealList";
import "../styles/MealSelection.css"

function MealSelection() {

  return (
      <div className="container">
        {MealList.map((meal) => 

          <div className="mealContainer">
            <img src={meal.cover} alt={meal.name} width="452.5px"></img>
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