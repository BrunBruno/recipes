import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;
const kurczakZRozna: Recipe = {
  name: "Kurczak z Rożna",
  type: "dinner",
  cookingMethods: ["roasted"],
  images: ["kurczak-z-rozna.jpg"],
  time: 90,
  portions: portions,
  taste: 5,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_whole, amount: 1, unit: "szt" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.smoked_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.granulated_garlic, amount: 0.5, unit: "lzi" },
        { ing: iSPC.vegetable_seasoning, amount: 0.5, unit: "lzi" },
        { ing: iSPC.salt, amount: 1, unit: "lzi" },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("oven-fries", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("sauerkraut", portions),
      dinnerSides("pickled-cucumber", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Kurczaka umyj i osusz papierowym ręcznikiem.",
        "W miseczce wymieszaj olej z przyprawami: solą, pieprzem, papryką, czosnkiem, tymiankiem i rozmarynem.",
        "Natrzyj dokładnie kurczaka przyprawami zarówno z zewnątrz, jak i od środka.",
        "Jeśli używasz rożna elektrycznego, zamocuj kurczaka na rożnie, aby był stabilny.",
        "Rozgrzej piekarnik lub rożen do 180-190°C.",
        "Piecz kurczaka przez około 70-90 minut, obracając go powoli na rożnie, aż skórka będzie złocista i chrupiąca, a mięso w środku dobrze wysmażone.",
        "Po upieczeniu odstaw kurczaka na 5 minut przed krojeniem, aby soki równomiernie się rozprowadziły.",
        "Podawaj z ulubionymi dodatkami: ziemniakami, surówką lub warzywami z pieca.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak"],
};

export default kurczakZRozna;
