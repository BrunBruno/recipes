import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const kurczakZRozna: Recipe = {
  name: "Kurczak z Rożna",
  type: "dinner",
  images: [""],
  time: 90,
  portions: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_whole, amount: 1, unit: "szt" },
        { ingredient: iFAT.oil, amount: 2, unit: "łyżka" },
        { ingredient: iSPC.salt, amount: 1, unit: "łyżeczka" },
        { ingredient: iSPC.sweet_paprika, amount: 1, unit: "łyżeczka" },
        { ingredient: iSPC.hot_paprika, amount: 1, unit: "łyżeczka" },
        { ingredient: iSPC.smoked_paprika, amount: 1, unit: "łyżeczka" },
        { ingredient: iSPC.granulated_garlic, amount: 0.5, unit: "łyżeczka" },
        { ingredient: iSPC.vegetable_seasoning, amount: 0.5, unit: "łyżeczka" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kurczaka umyj i osusz papierowym ręcznikiem.",
        "W miseczce wymieszaj olej z przyprawami: solą, pieprzem, papryką, czosnkiem, tymiankiem i rozmarynem.",
        "Natrzyj dokładnie kurczaka przyprawami zarówno z zewnątrz, jak i od środka.",
        "Jeśli używasz rożna elektrycznego, zamocuj kurczaka na rożnie, aby był stabilny.",
        "Rozgrzej piekarnik lub rożen do 180 - 190°C.",
        "Piecz kurczaka przez około 70 - 90 minut, obracając go powoli na rożnie, aż skórka będzie złocista i chrupiąca, a mięso w środku dobrze wysmażone.",
        "Po upieczeniu odstaw kurczaka na 5 minut przed krojeniem, aby soki równomiernie się rozprowadziły.",
        "Podawaj z ulubionymi dodatkami: ziemniakami, surówką lub warzywami z pieca.",
      ],
    },
  ],
  keyWords: ["kurczak", "rożen", "pieczone", "mięso"],
};

export default kurczakZRozna;
