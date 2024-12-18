import Conversion from "./Conversion"
import Dropdown from "./Dropdown"


function IngredientsSection({ servingsNumber, setServingsNumber, meal, Ingredients }) {
  return (
    <>
      <div className="div-ingredients-title">
        <p className="title-sections">Ingrédients</p>
        <Dropdown servingsNumber={servingsNumber} setServingsNumber={setServingsNumber} />
      </div>
      <div className="div-ingredients">
        {meal.ingredients.map((ingredient) => 
          <div className="div-individual-ingredient" key={ingredient[0]}>
            <img src={Ingredients[ingredient[0]]} alt={ingredient[0]}></img>
            <p>{Conversion(ingredient[1], ingredient[2], servingsNumber)}</p>
            <p>{ingredient[0]}</p>
          </div>
        )}
      </div>
      <div className="ustensils">
        <p className="title-sections">Ustensiles</p> 
        <p className="text-sections">{meal.ustensils}</p>
      </div>
    </>
  )
}

export default IngredientsSection