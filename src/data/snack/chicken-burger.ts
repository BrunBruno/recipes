import { iBAK } from "../../ingredients/ingBakery";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const chickenBurger: Recipe = {
  name: "Chicken Burger",
  type: "snack",
  country: "USA",
  images: [""],
  time: 30,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ing: iMET.chicken_ground, amount: 400, kw: true },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.wheat_flour, amount: 2, unit: "lz" },
        { ing: iGRN.breadcrumbs, amount: 4, unit: "lz" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iSPC.granulated_garlic, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Pozostałe",
      items: [
        { ing: iBAK.hamburger_buns, amount: 2, unit: "szt", kw: true },
        { ing: iVEG.lettuce, amount: 2, unit: "lst" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iSAU.mayonnaise, amount: 2, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie kotletów",
      steps: [
        "Mięso mielone z kurczaka przełóż do miski, dopraw solą, pieprzem oraz granulowanym czosnkiem i dokładnie wymieszaj.",
        "Uformuj z mięsa 2 równe kotlety dopasowane kształtem do bułek.",
        "Przygotuj trzy naczynia do panierowania: z mąką, roztrzepanym jajkiem oraz bułką tartą.",
        "Każdy kotlet obtocz najpierw w mące, następnie w jajku, a na końcu w bułce tartej.",
        "Rozgrzej olej na patelni i smaż panierowane kotlety z kurczaka przez około 4-5 minut z każdej strony, aż będą złociste i w pełni upieczone.",
      ],
    },
    {
      title: "Składanie burgerów",
      steps: [
        "Bułki do burgerów przekrój na pół i lekko podpiecz na suchej patelni.",
        "Pomidora pokrój w plastry, a sałatę umyj i osusz.",
        "Wewnętrzne strony obu połówek bułek posmaruj majonezem.",
        "Na dolnej części bułki ułóż liść sałaty, chrupiący kotlet z kurczaka, plastry pomidora, a całość przykryj górną częścią bułki.",
      ],
    },
  ],
  keyWords: ["kurczak", "mięso", "burger", "fast food", "pieczywo", "smażone"],
};

export default chickenBurger;
