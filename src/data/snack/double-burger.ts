import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const doubleBurger: Recipe = {
  name: "Double Burger",
  type: "snack",
  images: [""],
  time: 40,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ing: iMET.ground_beef, amount: 200, kw: true },
        { ing: iMET.ground_chicken, amount: 200, kw: true },
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
        { ing: iDIR.cheddar_cheese, amount: 2, unit: "plas", kw: true },
        { ing: iVEG.lettuce, amount: 2, unit: "lst" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iVEG.red_onion, amount: 0.25, unit: "szt" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iSAU.mayonnaise, amount: 3, unit: "lzi" },
        { ing: iSAU.mustard, amount: 1, unit: "lzi" },
        { ing: iLIQ.honey, amount: 1, unit: "lzi" },
        { ing: iJAR.pickled_cucumber, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosu",
      steps: [
        "Drobno posiekaj ogórka kiszonego.",
        "W miseczce wymieszaj majonez, musztardę oraz miód.",
        "Dodaj pokrojonego ogórka, wymieszaj całość i odstaw do lodówki, aby smaki się połączyły.",
      ],
    },
    {
      title: "Przygotowanie kotletów",
      steps: [
        "Mięso z kurczaka dopraw solą, pieprzem oraz granulowanym czosnkiem, uformuj kotlet, obtocz w mące, roztrzepanym jajku i bułce tartej, a następnie usmaż na rozgrzanym oleju na złoty kolor[cite: 4].",
        "Mięso wołowe podziel na 2 porcje, uformuj kulki i usmaż na mocno rozgrzanej patelni jako cienkie kotlety typu smash, doprawiając solą i pieprzem[cite: 3].",
        "Pod koniec smażenia wołowiny połącz ją z plastrami sera cheddar, aby się roztopiły[cite: 3].",
      ],
    },
    {
      title: "Składanie burgerów",
      steps: [
        "Bułki do burgerów przekrój na pół i lekko podpiecz na suchej patelni[cite: 3, 4].",
        "Pomidora, ogórki kiszone i czerwoną cebulę pokrój w plasterki, a sałatę umyj i osusz[cite: 3].",
        "Wewnętrzne strony bułek obficie posmaruj autorskim sosem miodowo-musztardowym.",
        "Ułóż kolejno: liść sałaty, chrupiącego kotleta z kurczaka[cite: 4], wołowego smash burgera z roztopionym serem cheddar[cite: 3], plastry pomidora, ogórka i czerwoną cebulę[cite: 3], przykrywając górną częścią bułki.",
      ],
    },
  ],
  keyWords: [
    "kurczak",
    "mięso",
    "wołowina",
    "ser",
    "burger",
    "fast food",
    "pieczywo",
    "sos",
    "smażone",
  ],
};

export default doubleBurger;
