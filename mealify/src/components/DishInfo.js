import preparation from "../assets/icons/preparation.svg"
import cooking from "../assets/icons/cooking.svg"
import calories from "../assets/icons/calories.svg"

function DishInfo({meal}) {
  return (
          <>
            <img src={meal.cover} alt={meal.name}></img>
            <p className="mealTitle">{meal.name}</p>
            <p className="text-sections">{meal.description}</p>
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
          </>
  )
}

export default DishInfo 