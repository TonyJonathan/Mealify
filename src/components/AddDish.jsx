import { useCallback } from "react";
import { useMenu } from "./MenuContext";

function useAddDish() {
  const { addToMenu, setAddToMenu } = useMenu();

  const addDish = useCallback((meal, servingsNumber) => {
    const currentDishAdded = addToMenu.find((dish) => dish.name === meal.name);
    console.log(servingsNumber)
    if (currentDishAdded) {
      
      const updatedMenu = addToMenu.map((dish) =>
        dish.name === meal.name
          ? { ...dish, quantity: Number(currentDishAdded.quantity) + Number(servingsNumber) }
          : dish
      );
      setAddToMenu(updatedMenu.filter((dish) => dish.quantity > 0));
    } else {
      setAddToMenu([...addToMenu, { name: meal.name, quantity: servingsNumber }]);
    }
  }, [addToMenu, setAddToMenu]);

  return addDish;
}

export default useAddDish;
