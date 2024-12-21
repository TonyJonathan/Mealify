import meatballs from "../assets/meals/meatballs.png"
import croqueMonsieurLeek from "../assets/meals/croqueMonsieurLeek.png"
import codChorizoCream from "../assets/meals/codChorizoCream.png"
import croqueMonsieur from "../assets/meals/croqueMonsieur.png"
import croziflette from "../assets/meals/croziflette.png"

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
    cover: croqueMonsieurLeek, 
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
      ["Beurrez un plat allant au four.", ["Beurre"]], 
      ["Disposez la moitié des tranches côté beurré vers le haut. Ajoutez la farce aux poireaux en réservant une cuillère à soupe par portion."], 
      ["Refermez avec la seconde tranche de pain, côté beurré sur la farce. Ensuite, recouvrez les sandwichs avec le reste de farce aux poireaux et de fromage râpé. "], 
      ["Enfournez pendant 10 minutes à 240°C. Servez avec une salade assaisonnée à votre goût, c'est prêt !", ["Salade (mélange)"]]
    ]
  }, 

  {
    id: 3,
    name: "Cabillaud à la crème de chorizo",
    cover: codChorizoCream,
    description: "Une recette au cabillaud qui fera frémir vos papilles !",
    nutriscore: "B",
    preparationTime: "5 minutes",
    cookingTime: "20 minutes",
    kcal: "699",
    proteins: "33g",
    carbohydrates: "50g",
    lipids: "42g",
    ustensils: "Plaques de cuisson, Poêle, Casserole, Mixeur",
    seasoning: "",
    ingredients: [
      ["Cabillaud (frais)", 1],
      ["Chorizo (entier)", 25, "g"],
      ["Pommes de terre", 250, "g"],
      ["Crème liquide", 60, "ml"],
      ["Beurre", 15, "g"],
      ["Ciboulette", 5, "g"]
    ], 
    recipe: [
      ["Épluchez les pommes de terre et coupez-les en petits dés.", ["Pommes de terre"]],
      ["Faites bouillir une casserole d'eau chaude salée, versez-y les pommes de terre et laissez cuire 15 minutes.", ["Pommes de terre"]], 
      ["Pendant ce temps, préparez la sauce : après avoir retiré la peau du chorizo, détaillez-le en petits dés.", ["Chorizo (entier)"]], 
      ["Dans une casserole, versez la crème liquide et les dés de chorizo. Faites chauffer jusqu'à début d’ébullition. Couvrez et laissez infuser une dizaine de minutes à feu doux.", ["Crème liquide", "Chorizo (entier)"]], 
      ["Pendant ce temps émincez finement la ciboulette si vous en avez.", ["Ciboulette"]], 
      ["Une fois les pommes de terre cuites, égouttez-les puis versez-les dans un récipient et ajoutez le beurre. Salez et poivrez puis écrasez le tout. Ajoutez la ciboulette si vous en avez. Réservez au chaud.", ["Pommes de terre", "Beurre", "Ciboulette"]], 
      ["Une fois le chorizo bien infusé, mixez le mélange à l'aide d'un mixeur plongeant.", ["Chorizo (entier)"]], 
      ["Pour finir, faites cuire votre cabillaud 2 minutes de chaque côté dans une poêle avec un filet d'huile d'olive. Salez et poivrez.", ["Cabillaud (frais)"]], 
      ["Dressez votre assiette en ajoutant la purée, le cabillaud et nappez de sauce au chorizo. S'il vous en reste, ajoutez quelques brins de ciboulette hachés. C'est prêt !"]
    ]
  }, 

  {
    id : 4, 
    name: "Croque-monsieur au four", 
    cover: croqueMonsieur, 
    description: "Un croque-monsieur comme on les aime !",
    nutriscore: "B", 
    preparationTime: "6 minutes",
    cookingTime: "10 minutes", 
    kcal: "623", 
    proteins: "34g",
    carbohydrates: "40g", 
    lipids: "36g", 
    ustensils: "Four, plat à gratin.", 
    seasoning: "", 
    ingredients: [
      ["Pain de mie", 2, "tran."],
      ["Jambon blanc", 1, "tran."],
      ["Fromage râpé", 60, "g"],
      ["Crème fraîche", 30, "g"],
      ["Parmesan (râpé)", 0.5, "càs"],
      ["Salade (mélange)", 2, "poignée"],
      ["Beurre demi-sel", 5, "g"]
    ], 
    recipe: [
      ["Préchauffez le four à 240°C. Mélangez dans un bol : la crème, le parmesan, et la moitié du fromage râpé, sel et poivre.", ["Crème fraîche", "Parmesan (râpé)", "Fromage râpé" ]],
      ["Beurrez les tranches de pain de mie d'un seul côté.", ["Pain de mie","Beurre"]], 
      ["Beurrez un plat allant au four.", ["Beurre"]], 
      ["Disposez la moitié des tranches côté beurré vers le haut."], 
      ["Beurrez les tranches de pain de mie d'un seul côté.", ["Beurre", "Pain de mie"]], 
      ["Beurrez un plat allant au four.", ["Beurre"]], 
      ["Disposez la moitié des tranches côté beurré vers le haut",  ["Pain de mie"]], 
      ["Refermez avec la seconde tranche de pain côté beurré sur le jambon, et recouvrez les sandwichs avec le mélange crème-fromage."], 
      ["Enfournez pendant 10 minutes à 240°C. Servez avec une salade assaisonnée à votre goût, c'est prêt !", ["Salade (mélange)"]]
    ]
  },

  {
    id : 5, 
    name: "Croziflette", 
    cover: croziflette, 
    description: "Remplacez les pommes de terre d'une tartiflette par des crozets au sarrasin, et découvrez la savoureuse croziflette !",
    nutriscore: "D", 
    preparationTime: "7 minutes",
    cookingTime: "35 minutes", 
    kcal: "694", 
    proteins: "28g",
    carbohydrates: "60g", 
    lipids: "37g", 
    ustensils: "Plaques de cuisson, Four, Casserole, Passoire, Poêle, Plat à gratin", 
    seasoning: "", 
    ingredients: [
      ["Roblochon", 50, "g"],
      ["Oignon jaune", 0.25],
      ["Lardons", 50, "g"],
      ["Crème fraîche", 1, "càs"],
      ["Crozets", 80, "g"],
    ], 
    recipe: [
      ["Préchauffez le four à 210°C. Faites cuire les crozets dans une casserole d'eau bouillante pendant 20 minutes.", ["Crozets"]],
      ["Pendant ce temps, épluchez puis émincez les oignons finement.", ["Oignon jaune"]], 
      ["Dans une poêle chaude, ajoutez les oignons émincés et les lardons. Faites revenir le tout pendant 10 minutes.", ["Lardons", "Oignon jaune"]], 
      ["Une fois les crozets cuits, égouttez-les."], 
      ["Coupez le reblochon en deux.", ["Roblochon"]], 
      ["Dans un plat à gratin, ajoutez les crozets, la crème fraîche et le mélange lardons/oignons. Salez, poivrez et mélangez bien.", ["Crozets", "Crème fraîche", "Lardons", "Oignon jaune"]], 
      ["Ajoutez le reblochon par-dessus, puis enfournez 15 minutes à 210°C.",  ["Roblochon"]], 
      ["Une fois le fromage bien fondu et doré, sortez le plat du four. C'est prêt !"]
    ]
  }

]