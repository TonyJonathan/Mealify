function AddDish({ meal, addToMenu, setAddToMenu, servingsNumber }) {
  
  const currentDishAdded = addToMenu.find((dish) => dish.name === meal.name); 
  if (currentDishAdded) {
    const menuFilteredCurrentDish = addToMenu.filter((dish) => dish.name !== meal.name)
    setAddToMenu([...menuFilteredCurrentDish, { name: meal.name, quantity: Number(currentDishAdded.quantity) + Number(servingsNumber) }])
  } else {
    setAddToMenu([...addToMenu, { name: meal.name, quantity: servingsNumber }]); 
  }
}

export default AddDish 
