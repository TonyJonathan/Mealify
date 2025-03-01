import React from 'react'
import { getImagePath } from './Ingredients'

function RecipeSection({ meal }) {
  return (
    <>
      <div className="recipe-section">
          <p className="title-sections">Recette</p>
          {meal.recipe.map((recipe, index) => 
            <div className="step" key={index}>
              <div className="ingredients-list">
              {Array.isArray(recipe.ingredient) ? (
                recipe.ingredient.map((ingredient) => (
                <img src={getImagePath(ingredient)} alt={ingredient} key={ingredient} className="ingredients-picture" />
                ))
)               : null}
              </div>
              <div>
                <p className="step-number">Étape {index + 1}</p>
                <p className="text-sections">{recipe.step}</p>
              </div>
            </div>
          )}
      </div>
    </>
  )
}

export default RecipeSection 