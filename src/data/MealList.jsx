
export const MealList = [
  {
    id: 1, 
    type: "meat", 
    name: "Boulettes alla bolognese", 
    cover: "meatballs", 
    thumbnail: "meatballsThumbnail", 
    description: "Des boulettes bolognaise pour un remake de la Belle et le Clochard...",
    nutriscore: "A", 
    preparationTime: "10 minutes",
    cookingTime: "15 minutes", 
    kcal: "739", 
    proteins: "40g",
    carbohydrates: "89g", 
    lipids: "23g", 
    ustensils: "Casserole, poêle, plaques de cuisson, passoire.", 
    seasoning: "Huile d'olive (1 càc)", 
    ingredients: [
      { name: "Pâtes (spaghetti)", quantity: 100, unity: "g" },
      { name: "Parmesan (râpé)", quantity: 1, unity: "càs" },
      { name: "Boeuf (steak haché frais)", quantity: 1 },
      { name: "Échalote", quantity: 0.25 },
      { name: "Sauce tomate", quantity: 80, unity: "g" },
      { name: "Basilic (frais)", quantity: 5, unity: "g" },
      { name: "Chapelure", quantity: 1, unity: "càs" },
      { name: "Œuf", quantity: 0.25 }
    ]
    , 
    recipe: [
      {
        step: "Si besoin, faites décongeler les steaks hachés. Émincez l'échalote finement.",
        ingredient: ["Échalote"]
      },
      { step: "Dans un récipient, ajoutez le boeuf, l'œuf, la chapelure, l'échalote, la moitié du parmesan par personne, salez, poivrez, malaxez le tout avec les mains.", ingredient: ["Œuf", "Chapelure", "Parmesan (râpé)", "Boeuf (steak haché frais)"] },
      { step: "Faire des boulettes de 4 cm environ en les roulant entre vos doigts." },
      {
        step: "Cuire les pâtes selon les instructions du paquet dans une eau salée.",
        ingredient: ["Pâtes (spaghetti)"]
      },
      { step: "Faire revenir les boulettes 5 minutes à la poêle bien chaude avec un filet d'huile d'olive." },
      {
        step: "En fin de cuisson, baisser le feu au minimum, ajoutez la sauce tomate, 1 cuillère à soupe d'eau par personne et laissez mijoter le temps de la prochaine étape.",
        ingredient: ["Sauce tomate"]
      },
      {
        step: "Une fois les pâtes cuites, égouttez-les, puis mélangez-les avec la sauce et les boulettes. Servir avec un peu de parmesan (optionnel : et de basilic frais si vous en avez) sur le dessus. C'est prêt !",
        ingredient: ["Basilic (frais)", "Parmesan (râpé)"]
      }
    ]
    
  },

  {
    id: 2, 
    type: "veggie", 
    name: "Croque-monsieur aux poireaux", 
    cover: "croqueMonsieurLeek", 
    thumbnail: "croqueMonsieurLeekThumbnail",
    description: "Un croque-monsieur gourmand, les légumes en plus !",
    nutriscore: "A", 
    preparationTime: "10 minutes",
    cookingTime: "20 minutes", 
    kcal: "654", 
    proteins: "31g",
    carbohydrates: "47g", 
    lipids: "37g", 
    ustensils: "Four, poêle, plaques de cuisson.", 
    seasoning: "", 
    ingredients: [
      { name: "Poireau", quantity: 1 },
      { name: "Pain de mie", quantity: 2, unity: "tran." },
      { name: "Fromage râpé", quantity: 60, unity: "g" },
      { name: "Crème fraîche", quantity: 30, unity: "g" },
      { name: "Parmesan (morceaux)", quantity: 1, unity: "càs" },
      { name: "Salade (mélange)", quantity: 50, unity: "g" },
      { name: "Beurre", quantity: 5, unity: "g" }
    ], 
    recipe: [
      { 
        step: "Lavez le poireau et coupez les extrémités pour ne garder que le blanc. Coupez-le en deux dans le sens de la longueur puis émincez finement.", 
        ingredient: ["Poireau"] 
      },
    
      { 
        step: "Dans une poêle bien chaude, ajoutez une noisette de beurre et le poireau émincé. Faites revenir à feu vif pendant 2 minutes en remuant. Salez et poivrez.", 
        ingredient: ["Beurre", "Poireau"] 
      },
    
      { 
        step: "Baissez le feu et laissez mijoter à couvert pendant 8 minutes." 
      },
    
      { 
        step: "Préchauffez le four à 240°C. Mélangez dans un bol les poireaux cuits, la crème, le parmesan et le fromage râpé (gardez en une petite poignée pour la suite). Salez et poivrez.", 
        ingredient: ["Poireau", "Crème fraîche", "Parmesan (morceaux)", "Fromage râpé"] 
      },
    
      { 
        step: "Beurrez les tranches de pain de mie d'un seul côté.", 
        ingredient: ["Beurre", "Pain de mie"] 
      },
    
      { 
        step: "Beurrez un plat allant au four.", 
        ingredient: ["Beurre"] 
      },
    
      { 
        step: "Disposez la moitié des tranches côté beurré vers le haut. Ajoutez la farce aux poireaux en réservant une cuillère à soupe par portion." 
      },
    
      { 
        step: "Refermez avec la seconde tranche de pain, côté beurré sur la farce. Ensuite, recouvrez les sandwichs avec le reste de farce aux poireaux et de fromage râpé." 
      },
    
      { 
        step: "Enfournez pendant 10 minutes à 240°C. Servez avec une salade assaisonnée à votre goût, c'est prêt !", 
        ingredient: ["Salade (mélange)"] 
      }
    ]
    
  }, 

  {
    id: 3,
    type: "fish", 
    name: "Cabillaud à la crème de chorizo",
    cover: "codChorizoCream",
    thumbnail: "codChorizoCreamThumbnail",
    description: "Une recette au cabillaud qui fera frémir vos papilles !",
    nutriscore: "B",
    preparationTime: "5 minutes",
    cookingTime: "20 minutes",
    kcal: "699",
    proteins: "33g",
    carbohydrates: "50g",
    lipids: "42g",
    ustensils: "Plaques de cuisson, poêle, casserole, mixeur",
    seasoning: "",
    ingredients: [
      { name: "Cabillaud (frais)", quantity: 1 },
      { name: "Chorizo (entier)", quantity: 25, unity: "g" },
      { name: "Pommes de terre", quantity: 250, unity: "g" },
      { name: "Crème liquide", quantity: 60, unity: "ml" },
      { name: "Beurre", quantity: 15, unity: "g" },
      { name: "Ciboulette", quantity: 5, unity: "g" }
    ], 
    recipe: [
      { 
        step: "Épluchez les pommes de terre et coupez-les en petits dés.", 
        ingredient: ["Pommes de terre"] 
      },
    
      { 
        step: "Faites bouillir une casserole d'eau chaude salée, versez-y les pommes de terre et laissez cuire 15 minutes.", 
        ingredient: ["Pommes de terre"] 
      },
    
      { 
        step: "Pendant ce temps, préparez la sauce : après avoir retiré la peau du chorizo, détaillez-le en petits dés.", 
        ingredient: ["Chorizo (entier)"] 
      },
    
      { 
        step: "Dans une casserole, versez la crème liquide et les dés de chorizo. Faites chauffer jusqu'à début d’ébullition. Couvrez et laissez infuser une dizaine de minutes à feu doux.", 
        ingredient: ["Crème liquide", "Chorizo (entier)"] 
      },
    
      { 
        step: "Pendant ce temps émincez finement la ciboulette si vous en avez.", 
        ingredient: ["Ciboulette"] 
      },
    
      { 
        step: "Une fois les pommes de terre cuites, égouttez-les puis versez-les dans un récipient et ajoutez le beurre. Salez et poivrez puis écrasez le tout. Ajoutez la ciboulette si vous en avez. Réservez au chaud.", 
        ingredient: ["Pommes de terre", "Beurre", "Ciboulette"] 
      },
    
      { 
        step: "Une fois le chorizo bien infusé, mixez le mélange à l'aide d'un mixeur plongeant.", 
        ingredient: ["Chorizo (entier)"] 
      },
    
      { 
        step: "Pour finir, faites cuire votre cabillaud 2 minutes de chaque côté dans une poêle avec un filet d'huile d'olive. Salez et poivrez.", 
        ingredient: ["Cabillaud (frais)"] 
      },
    
      { 
        step: "Dressez votre assiette en ajoutant la purée, le cabillaud et nappez de sauce au chorizo. S'il vous en reste, ajoutez quelques brins de ciboulette hachés. C'est prêt !" 
      }
    ]
    
  }, 

  {
    id: 4, 
    type: "meat", 
    name: "Croque-monsieur au four", 
    cover: "croqueMonsieur", 
    thumbnail: "croqueMonsieurThumbnail",
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
      { name: "Pain de mie", quantity: 2, unity: "tran." },
      { name: "Jambon blanc", quantity: 1, unity: "tran." },
      { name: "Fromage râpé", quantity: 60, unity: "g" },
      { name: "Crème fraîche", quantity: 30, unity: "g" },
      { name: "Parmesan (râpé)", quantity: 0.5, unity: "càs" },
      { name: "Salade (mélange)", quantity: 100, unity: "g" },
      { name: "Beurre demi-sel", quantity: 5, unity: "g" }
    ]
    , 
    recipe: [
      { 
        step: "Préchauffez le four à 240°C. Mélangez dans un bol : la crème, le parmesan, et la moitié du fromage râpé, sel et poivre.", 
        ingredient: ["Crème fraîche", "Parmesan (râpé)", "Fromage râpé"] 
      },
    
      { 
        step: "Beurrez les tranches de pain de mie d'un seul côté.", 
        ingredient: ["Pain de mie", "Beurre"] 
      },
    
      { 
        step: "Beurrez un plat allant au four.", 
        ingredient: ["Beurre"] 
      },
    
      { 
        step: "Disposez la moitié des tranches côté beurré vers le haut." 
      },
    
      { 
        step: "Beurrez les tranches de pain de mie d'un seul côté.", 
        ingredient: ["Beurre", "Pain de mie"] 
      },
    
      { 
        step: "Beurrez un plat allant au four.", 
        ingredient: ["Beurre"] 
      },
    
      { 
        step: "Disposez la moitié des tranches côté beurré vers le haut", 
        ingredient: ["Pain de mie"] 
      },
    
      { 
        step: "Refermez avec la seconde tranche de pain côté beurré sur le jambon, et recouvrez les sandwichs avec le mélange crème-fromage." 
      },
    
      { 
        step: "Enfournez pendant 10 minutes à 240°C. Servez avec une salade assaisonnée à votre goût, c'est prêt !", 
        ingredient: ["Salade (mélange)"] 
      }
    ]
    
  },

  {
    id: 5,
    type: "meat",
    name: "Croziflette",
    cover: "croziflette",
    thumbnail: "crozifletteThumbnail",
    description: "Remplacez les pommes de terre d'une tartiflette par des crozets au sarrasin, et découvrez la savoureuse croziflette !",
    nutriscore: "D",
    preparationTime: "7 minutes",
    cookingTime: "35 minutes",
    kcal: "694",
    proteins: "28g",
    carbohydrates: "60g",
    lipids: "37g",
    ustensils: "Plaques de cuisson, four, casserole, passoire, poêle, plat à gratin",
    seasoning: "",
    ingredients: [
      { name: "Roblochon", quantity: 50, unity: "g" },
      { name: "Oignon jaune", quantity: 0.25 },
      { name: "Lardons", quantity: 50, unity: "g" },
      { name: "Crème fraîche", quantity: 1, unity: "càs" },
      { name: "Crozets", quantity: 80, unity: "g" }
    ], 
    recipe: [
      { 
        step: "Préchauffez le four à 210°C. Faites cuire les crozets dans une casserole d'eau bouillante pendant 20 minutes.", 
        ingredient: ["Crozets"] 
      },
    
      { 
        step: "Pendant ce temps, épluchez puis émincez les oignons finement.", 
        ingredient: ["Oignon jaune"] 
      },
    
      { 
        step: "Dans une poêle chaude, ajoutez les oignons émincés et les lardons. Faites revenir le tout pendant 10 minutes.", 
        ingredient: ["Lardons", "Oignon jaune"] 
      },
    
      { 
        step: "Une fois les crozets cuits, égouttez-les." 
      },
    
      { 
        step: "Coupez le reblochon en deux.", 
        ingredient: ["Roblochon"] 
      },
    
      { 
        step: "Dans un plat à gratin, ajoutez les crozets, la crème fraîche et le mélange lardons/oignons. Salez, poivrez et mélangez bien.", 
        ingredient: ["Crozets", "Crème fraîche", "Lardons", "Oignon jaune"] 
      },
    
      { 
        step: "Ajoutez le reblochon par-dessus, puis enfournez 15 minutes à 210°C.", 
        ingredient: ["Roblochon"] 
      },
    
      { 
        step: "Une fois le fromage bien fondu et doré, sortez le plat du four. C'est prêt !" 
      }
    ]
    
  }, 

  {
    id: 6, 
    type: "fish", 
    name: "Makis saumon avocat", 
    cover: "salmonAvocadoMakis", 
    thumbnail: "salmonAvocadoMakisThumbnail",
    description: "Faites-vous une soirée makis !",
    nutriscore: "C", 
    preparationTime: "10 minutes",
    cookingTime: "20 minutes", 
    kcal: "540", 
    proteins: "15g",
    carbohydrates: "86g", 
    lipids: "14g", 
    ustensils: "Plaques de cuisson, casserole, économe", 
    seasoning: "", 
    ingredients: [
      { name: "Riz (à sushi)", quantity: 100, unity: "g" },
      { name: "Saumon (surgelé)", quantity: 50, unity: "g" },
      { name: "Algues nori (feuille)", quantity: 2 },
      { name: "Avocat", quantity: 0.25 },
      { name: "Vinaigre de riz", quantity: 15, unity: "ml" },
      { name: "Sauce soja salée", quantity: 1, unity: "càs" },
      { name: "Fromage frais", quantity: 1, unity: "càs" }
    ]
    , 
    recipe: [
      { 
        step: "Rincez le riz à sushi plusieurs fois à l'eau claire, puis faites-le cuire selon les indications du paquet.", 
        ingredient: ["Riz (à sushi)"] 
      },
    
      { 
        step: "Faites décongeler les filets de saumon (si vous utilisez du saumon frais, pensez à le surgeler avant de réaliser la recette). Depuis leur emballage en plastique ou dans un sachet zip, plongez les filets dans un récipient rempli d'eau à température ambiante.", 
        ingredient: ["Saumon (surgelé)"] 
      },
    
      { 
        step: "Une fois décongelé, enlevez la peau du saumon. Coupez-le en fines lamelles.", 
        ingredient: ["Saumon (surgelé)"] 
      },
    
      { 
        step: "Coupez l'avocat en deux. Retirez la peau, puis coupez-le en fines lamelles.", 
        ingredient: ["Avocat"] 
      },
    
      { 
        step: "Une fois le riz cuit, ajoutez le vinaigre de riz et mélangez bien le tout délicatement. Transvasez le riz à sushi dans un plat pour qu'il refroidisse.", 
        ingredient: ["Vinaigre de riz", "Riz (à sushi)"] 
      },
    
      { 
        step: "Formez vos makis. Déroulez la natte en bambou (ou une feuille de papier sulfurisé) et déposez la feuille d'algue nori par-dessus.", 
        ingredient: ["Algues nori (feuille)"] 
      },
    
      { 
        step: "Préparez un petit bol d'eau à côté pour tremper vos doigts dedans, afin d'éviter que le riz ne colle et faciliter le montage de vos makis. Étalez une fine couche de riz sur l'ensemble de la feuille d'algue nori." 
      },
    
      { 
        step: "Disposez : le fromage frais, les lamelles de saumon et les lamelles d'avocat. Badigeonnez un peu d'eau sur l'extrémité de la feuille de nori pour qu'elle se colle bien.", 
        ingredient: ["Fromage frais", "Saumon (surgelé)", "Avocat"] 
      },
    
      { 
        step: "Enroulez le rouleau sur lui-même en appuyant fermement avec vos mains pour qu'il soit bien serré." 
      },
    
      { 
        step: "Coupez les makis, à l'aide d'un couteau bien aiguisé (pour une meilleure découpe : réservez au frais 15 à 20 minutes, de façon à ce qu'ils se raffermissent). Servez les makis avec la sauce soja. C'est prêt !", 
        ingredient: ["Sauce soja salée"] 
      }
    ]
    
  },

  {
    id: 7, 
    type: "veggie", 
    name: "Curry & boulettes veggie", 
    cover: "curryVeggieBalls", 
    thumbnail: "curryVeggieBallsThumbnail",
    description: "Des boulettes de légumes au curry : un plat du soir végé idéal avec du riz !",
    nutriscore: "B", 
    preparationTime: "5 minutes",
    cookingTime: "10 minutes", 
    kcal: "653", 
    proteins: "24g",
    carbohydrates: "68g", 
    lipids: "32g", 
    ustensils: "Casserole, plaques de cuisson, passoire", 
    seasoning: "", 
    ingredients: [
      { name: "Boulettes végétales", quantity: 80, unity: "g" },
      { name: "Riz", quantity: 70, unity: "g" },
      { name: "Épinards (surgelés)", quantity: 100, unity: "g" },
      { name: "Lait de coco", quantity: 80, unity: "ml" },
      { name: "Curry (poudre)", quantity: 1, unity: "càs" },
      { name: "Sauce soja salée", quantity: 1, unity: "càs" },
      { name: "Tomate (concentré)", quantity: 1, unity: "càs" }
    ]
    , 
    recipe: [
      { 
        step: "Dans une casserole d’eau bouillante salée, faites cuire le riz selon les instructions du paquet. Égouttez-le en fin de cuisson.", 
        ingredient: ["Riz"] 
      },
    
      { 
        step: "Pendant ce temps, faites chauffer un filet d'huile d'olive dans une poêle. Ajoutez les épinards surgelés et faites-les revenir à couvert pendant 4 à 5 minutes, sur feu moyen.", 
        ingredient: ["Épinards (surgelés)"] 
      },
    
      { 
        step: "Ajoutez le curry et le concentré de tomate, puis mélangez. Ajoutez ensuite le lait de coco. Mélangez puis laissez mijoter 3 à 4 minutes.", 
        ingredient: ["Curry (poudre)", "Tomate (concentré)", "Lait de coco"] 
      },
    
      { 
        step: "Ajoutez les boulettes végétales et mélangez. Salez, poivrez, puis laissez mijoter à nouveau 3 à 4 minutes.", 
        ingredient: ["Boulettes végétales"] 
      },
    
      { 
        step: "Servez le curry veggie sur le riz. Ré-assaisonnez selon vos goûts, c'est prêt !" 
      }
    ]
    
  }, 

  {
    id: 8, 
    type: "meat", 
    name: "Burger avocat & lard", 
    cover: "avocadoAndBaconBurger", 
    thumbnail: "avocadoAndBaconBurgerThumbnail",
    description: "Rien de plus gourmand qu'un burger avocat et lard pour se réconforter cet hiver !",
    nutriscore: "B", 
    preparationTime: "3 minutes",
    cookingTime: "10 minutes", 
    kcal: "625", 
    proteins: "22g",
    carbohydrates: "53g", 
    lipids: "37g", 
    ustensils: "Poêle, plaques de cuisson", 
    seasoning: "", 
    ingredients: [
      { name: "Pain à burger", quantity: 1 },
      { name: "Lard", quantity: 2, unity: "tran." },
      { name: "Avocat", quantity: 0.5 },
      { name: "Œuf", quantity: 1 },
      { name: "Ciboulette", quantity: 5, unity: "g" },
      { name: "Beurre", quantity: 10, unity: "g" }
    ]
    , 
    recipe: [
      { 
        step: "Coupez les pains à burger en deux. Dans une poêle à feu vif, ajoutez une noisette de beurre et faites toaster, côté mie, les pains à burger pendant 3 minutes.", 
        ingredient: ["Pain à burger", "Beurre"] 
      },
    
      { 
        step: "Retirez les pains puis ajoutez dans la même poêle les tranches de lard et faites-les griller 2 minutes de chaque côté sur feu vif. Elles doivent devenir presque croustillantes. Débarrassez ensuite sur une feuille de papier essuie-tout.", 
        ingredient: ["Lard"] 
      },
    
      { 
        step: "Gardez la même poêle, ajoutez une noisette de beurre et faites cuire les œufs au plat. Salez et poivrez.", 
        ingredient: ["Beurre", "Œuf"] 
      },
    
      { 
        step: "Dressez vos burgers. Déposez l'avocat, salez et poivrez. Ajoutez les tranches de lard, l'œuf au plat et de la ciboulette hachée si vous en avez. Refermez le burger, c'est prêt !", 
        ingredient: ["Avocat", "Lard", "Œuf", "Ciboulette"] 
      }
    ]
    
  }


]

MealList.forEach((meal) => {
  meal.cover = `meals/${meal.cover}.png`
  meal.thumbnail = `meals/${meal.thumbnail}.webp`
})