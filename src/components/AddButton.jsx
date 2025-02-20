import React from "react";
import useAddDish from "./addDish";
import { useMenu } from "./MenuContext";

function AddButton({ meal }) {
  const addDish = useAddDish();
  const { addToMenu } = useMenu();
  const mealNumber = (meal) => {
    const dish = addToMenu.find((dish) => dish.name === meal.name);
    return dish ? dish.quantity : 0;
  };

  return (
    <>
      {addToMenu.find((dish) => dish.name === meal.name && dish.quantity > 0) ? (
        <div className="addMealSelection">
          <button onClick={() => addDish(meal, -1)}>-</button>
          <input type="text" value={mealNumber(meal)} disabled />
          <button onClick={() => addDish(meal, 1)}>+</button>
        </div>
      ) : (
        <button className="addMeal" onClick={() => addDish(meal, 1)}>
          Ajouter
        </button>
      )}
    </>
  );
}

export default AddButton;
