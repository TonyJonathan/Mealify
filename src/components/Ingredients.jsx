const getImagePath = (ingredientKey) => {
  const fileName = ingredients[ingredientKey];
  return fileName && `ingredients/${fileName}.webp`;
};


const ingredients = {
  "Pâtes (spaghetti)": "spaghetti",
  "Boeuf (steak haché frais)": "beffSteak",
  "Échalote": "shallot",
  "Sauce tomate": "tomatoSauce",
  "Basilic (frais)": "basil",
  "Chapelure": "breadcrumbs",
  "Œuf": "egg",
  "Poireau": "leek",
  "Pain de mie": "slicedBread",
  "Fromage râpé": "gratedCheese",
  "Crème fraîche": "freshCream",
  "Parmesan (morceaux)": "parmesanChunks",
  "Salade (mélange)": "mixedSalad",
  "Beurre": "butter",
  "Beurre demi-sel": "butter",
  "Cabillaud (frais)": "cod",
  "Chorizo (entier)": "chorizo",
  "Pommes de terre": "potatoes",
  "Crème liquide": "liquidCream",
  "Ciboulette": "chives",
  "Parmesan (râpé)": "gratedParmesan",
  "Jambon blanc": "cookedHam",
  "Roblochon": "roblochon",
  "Lardons": "dicedBacon",
  "Crozets": "crozets",
  "Oignon jaune": "yellowOnion",
  "Riz (à sushi)": "sushiRice",
  "Saumon (surgelé)": "frozenSalmon",
  "Algues nori (feuille)": "noriSheet",
  "Avocat": "avocado",
  "Vinaigre de riz": "riceVinegar",
  "Sauce soja salée": "saltySoySauce",
  "Fromage frais": "creamCheese",
  "Boulettes végétales": "veggieBalls",
  "Riz": "rice",
  "Épinards (surgelés)": "frozenSpinach",
  "Lait de coco": "coconutMilk",
  "Curry (poudre)": "curryPowder",
  "Tomate (concentré)": "tomatoPaste",
  "Lard": "bacon",
  "Pain à burger": "burgerBun",
};

export { ingredients, getImagePath };