function AddDish({ meal, addToMenu, setAddToMenu, servingsNumber }) {
  
  const currentDishAdded = addToMenu.find((dish) => dish.name === meal.name); 
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
}

export default AddDish 
