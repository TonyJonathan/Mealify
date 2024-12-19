import meatballs from "../assets/meals/meatballs.png"
import croqueMonsieur from "../assets/meals/croqueMonsieur.png"

export const MealList = [
  {
    id: 1, 
    name: "Boulettes alla bolognese", 
    cover: meatballs, 
    description: "Des boulettes bolognaise pour un remake de la Belle et le Clochard...",
    nutriscore: "A", 
    preparationTime: "10 minutes",
    cookingTime: "15 minutes", 
    kcal: "739", 
    proteins: "40g",
    carbohydrates: "89g", 
    lipids: "23g", 
    ustensils: "Casserole, Poêle, Plaques de cuisson, Passoire.", 
    seasoning: "Huile d'olive (1 càc)", 
    ingredients: [
      ["Pâtes (spaghetti)", 100, "g"],
      ["Parmesan (râpé)", 1, "càs"],
      ["Boeuf (steak haché frais)", 1],
      ["Échalote", 0.25],
      ["Sauce tomate", 80, "g"],
      ["Basilic (frais)", 5, "g"],
      ["Chapelure", 1, "càs"],
      ["Œuf", 0.25]
    ], 
    recipe: [
      ["Si besoin, faites décongeler les steaks hachés. Émincez l'échalote finement.", ["Échalote"]],
      ["Dans un récipient ajoutez le boeuf, l'oeuf, la chapelure, l'échalote, la moitié du parmesan/personne, salez, poivrez, malaxez le tout avec les mains.", ["Œuf", "Chapelure", "Parmesan (râpé)", "Boeuf (steak haché frais)"]], 
      ["Faire des boulettes de 4 cm environ en les roulant entre vos doigts."], 
      ["Cuire les pâtes selon les instructions du paquet dans une eau salée.", ["Pâtes (spaghetti)"]], 
      ["Faire revenir les boulettes 5 minutes à la poêle bien chaude avec un filet d'huile d'olive."], 
      ["En fin de cuisson, baisser le feu au minimum, ajoutez la sauce tomate, 1 cuillère à soupe d'eau/personne et laissez mijoter le temps de la prochaine étape.", "Sauce tomate"], 
      ["Une fois les pâtes cuites, égouttez-les, puis mélangez-les avec la sauce et les boulettes. Servir avec un peu de parmesan (optionnel : et de basilic frais si vous en avez) sur le dessus. C'est prêt !", ["Basilic (frais)", "Parmesan (râpé)"]]
    ]
  },

  {
    id : 2, 
    name: "Croque-monsieur aux poireaux", 
    cover: croqueMonsieur, 
    description: "Un croque-monsieur gourmand, les légumes en plus !",
    nutriscore: "A", 
    preparationTime: "10 minutes",
    cookingTime: "20 minutes", 
    kcal: "654", 
    proteins: "31g",
    carbohydrates: "47g", 
    lipids: "37g", 
    ustensils: "Four, Poêle, Plaques de cuisson.", 
    seasoning: "", 
    ingredients: [
      ["Poireau", 1],
      ["Pain de mie", 2, "tran."],
      ["Fromage râpé", 60, "g"],
      ["Crème fraîche", 30, "g"],
      ["Parmesan (morceaux)", 1, "càs"],
      ["Salade (mélange)", 1, "poignée"],
      ["Beurre", 5, "g"]
    ], 
    recipe: [
      ["Lavez le poireau et coupez les extrémités pour ne garder que le blanc. Coupez-le en deux dans le sens de la longueur puis émincez finement.", ["Poireau"]],
      ["Dans une poêle bien chaude, ajoutez une noisette de beurre et le poireau émincé. Faites revenir à feu vif pendant 2 minutes en remuant. Salez et poivrez.", ["Beurre", "Poireau"]], 
      ["Baissez le feu et laissez mijoter à couvert pendant 8 minutes."], 
      ["Préchauffez le four à 240°C. Mélangez dans un bol les poireaux cuits, la crème, le parmesan et le fromage râpé (gardez en une petite poignée pour la suite).* Salez et poivrez.", ["Poireau", "Crème fraîche", "Parmesan (morceaux)", "Fromage râpé"]], 
      ["Beurrez les tranches de pain de mie d'un seul côté.", ["Beurre", "Pain de mie"]], 
      ["Beurrez un plat allant au four.", "Beurre"], 
      ["Disposez la moitié des tranches côté beurré vers le haut. Ajoutez la farce aux poireaux en réservant une cuillère à soupe par portion."], 
      ["Refermez avec la seconde tranche de pain, côté beurré sur la farce. Ensuite, recouvrez les sandwichs avec le reste de farce aux poireaux et de fromage râpé. "], 
      ["Enfournez pendant 10 minutes à 240°C. Servez avec une salade assaisonnée à votre goût, c'est prêt !", ["Salade (mélange)"]]
    ]
  }

]