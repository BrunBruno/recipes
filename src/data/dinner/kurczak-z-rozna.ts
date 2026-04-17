import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;
const kurczakZRozna: Recipe = {
  name: "Kurczak z Rożna",
  description:
    "Pieczony kurczak z rożna przyprawiony mieszanką papryk, czosnku i ziół, z chrupiącą skórką i soczystym mięsem. Idealny obiad dla 4 osób.",
  type: "dinner",
  images: ["kurczak-z-rozna.jpg"],
  time: 90,
  portions: portions,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ingredient: iMET.chicken_whole, amount: 1, unit: "szt" },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ingredient: iSPC.hot_paprika, amount: 1, unit: "lzi" },
        { ingredient: iSPC.smoked_paprika, amount: 1, unit: "lzi" },
        { ingredient: iSPC.granulated_garlic, amount: 0.5, unit: "lzi" },
        { ingredient: iSPC.vegetable_seasoning, amount: 0.5, unit: "lzi" },
        { ingredient: iSPC.salt, amount: 1, unit: "lzi" },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iJAR.frozen_fries, amount: portions * 150 },
        { ingredient: iJAR.sauerkraut, amount: portions * 150 },
        { ingredient: iSPC.salt },
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
    {
      title: "Przykładowe podanie",
      steps: [
        "Upiecz frytki w piekarniku zgodnie z instrukcją na opakowaniu.",
        "Podawaj pałki barbecue na talerzu z porcją frytek.",
        "Obok dodaj kiszą kapustę jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakZRozna;
