import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 4;
const kotletDevolay: Recipe = {
  name: "Kotlet Devolay",
  type: "dinner",
  cookingMethods: [["fried", 10]],
  images: [
    "kotlet-devolay.jpg",
    "kotlet-devolay-2.jpg",
    "kotlet-devolay-3.jpg",
  ],
  time: 60,
  portions: portions,
  taste: 4,
  difficulty: null,
  ingredients: [
    {
      title: "Mięso",
      items: [
        { ing: iMET.ground_chicken, amount: 600 },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        { ing: iGRN.breadcrumbs, amount: 6, unit: "lz" },
        ...fryingFat(iFAT.oil, 2, "lz", 0.5),
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Masło czosnkowo-ziołowe",
      items: [
        { ing: iFAT.butter, amount: 100 },
        { ing: iVEG.garlic, amount: 4, unit: "zbk" },
        { ing: iHRB.parsley },
        { ing: iHRB.dill },
        { ing: iHRB.wild_garlic },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("mashed-potatoes", portions),
      dinnerSides("boiled-potatoes", portions),
      dinnerSides("oven-fries", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("steamed-vegetables", portions),
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "Masło czosnkowo-ziołowe",
      steps: [
        "Masło przełóż do miski i pozostaw, aby zmiękło.",
        "Dodaj drobno posiekany czosnek oraz koper lub pietruszkę.",
        "Dopraw solą i pieprzem, dokładnie wymieszaj.",
        "Przełóż masło do woreczka lub folii spożywczej.",
        "Uformuj 4-5 małych wałków i włóż do zamrażalnika do całkowitego zamrożenia.",
      ],
    },
    {
      title: "Kotlety devolay",
      steps: [
        "Mięso mielone dopraw solą i pieprzem, dokładnie wymieszaj.",
        "Podziel mięso na porcje i rozpłaszcz każdą z nich w dłoni.",
        "Na środek nałóż zamrożony wałek masła i szczelnie zawiń mięso, formując kotlet.",
        "Uformowane kotlety włóż do zamrażalnika na 30 minut.",
        "Przygotuj panierkę: osobno mąkę, roztrzepane jajka i bułkę tartą.",
        "Każdy kotlet obtocz w mące, jajku i bułce tartej, a następnie ponownie w jajku i bułce tartej.",
        "Rozgrzej olej na bardzo małym ogniu.",
        "Smaż kotlety powoli, aż będą złociste z każdej strony i dobrze wysmażone w środku.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak"],
};

export default kotletDevolay;
