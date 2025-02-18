import unitConvert from "./unitConvert"
import Dropdown from "./Dropdown"
import React from "react"
import { getImagePath } from "./Ingredients"

function IngredientsSection({ servingsNumber, setServingsNumber, meal }) {
  return (
    <>
      <div className="div-ingredients-title">
        <p className="title-sections">Ingrédients</p>
        <Dropdown servingsNumber={servingsNumber} setServingsNumber={setServingsNumber} />
      </div>
      <div className="div-ingredients">
        {meal.ingredients.map((ingredient) => (
          <div className="div-individual-ingredient" key={ingredient.name}>
            <img src={getImagePath(ingredient.name)} alt={ingredient.name}></img>
            <p>{unitConvert(ingredient.quantity, ingredient.unity, servingsNumber)}</p>
            <p>{ingredient.name}</p>
          </div>
        ))}
      </div>
      <div className="ustensils">
        <p className="title-sections">Ustensiles</p>
        <p className="text-sections">{meal.ustensils}</p>
      </div>
    </>
  )
}

export default IngredientsSection
