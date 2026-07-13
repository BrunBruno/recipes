import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 5;
const klopsikiZIkei: Recipe = {
  name: "Klopsiki z IKEI",
  type: "dinner",
  cookingMethods: [
    ["fried", "10-15"],
    ["stewed", "???"],
  ],
  images: [""],
  time: 150,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Klopsiki",
      items: [
        { ing: iMET.ground_beef, amount: 500 },
        { ing: iMET.ground_pork, amount: 250 },
        ...fryingFat(iFAT.oil, 2, "lz", 0.3),
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 100 },
        { ing: iDIR.milk, amount: 5, unit: "lz" },
        { ing: iLIQ.soy_sauce, amount: 1, unit: "lz" },
        { ing: iHRB.coriander, amount: 0.25, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iFAT.butter, amount: 40 },
        { ing: iGRN.flour, amount: 40 },
        { ing: iDIR.cream_18, amount: 150, unit: "ml" },
        { ing: iLIQ.meat_stock, amount: 300, unit: "ml" },
        { ing: iLIQ.soy_sauce, amount: 2, unit: "lz" },
        { ing: iSAU.mustard_dijon, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("mashed-potatoes", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("peas-with-cranberries", portions),
      dinnerSides("canned-peas", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "Klopsiki",
      steps: [
        "Wymieszaj oba rodzaje mięsa w dużej misce.",
        "Dodaj jajko, mleko, bułkę tartą oraz przyprawy.",
        "Cebulę drobno posiekaj, czosnek przeciśnij przez praskę i dodaj do masy.",
        "Dokładnie wymieszaj wszystkie składniki dłońmi.",
        "Zwilżaj dłonie wodą i formuj małe klopsiki wielkości orzecha włoskiego.",
        "Ułóż klopsiki na talerzu, przykryj i odstaw do lodówki na około 2 godziny.",
        "Obsmaż klopsiki na rozgrzanym oleju z każdej strony, aż się zarumienią.",
        "Przykryj patelnię i duś klopsiki przez kilka minut na małym ogniu, aż będą gotowe w środku.",
      ],
    },
    {
      title: "Sos",
      steps: [
        "Na patelni po smażeniu klopsików rozpuść masło.",
        "Dodaj mąkę i mieszaj, aż połączy się z masłem.",
        "Wlej ciepły bulion i mieszaj trzepaczką, aby pozbyć się grudek.",
        "Dodaj sos sojowy, śmietankę oraz musztardę.",
        "Doprowadź sos do wrzenia i dopraw do smaku solą oraz pieprzem.",
        "Podawaj klopsiki z sosem na ciepło.",
      ],
    },
  ],
  keyWords: [],
};

export default klopsikiZIkei;
