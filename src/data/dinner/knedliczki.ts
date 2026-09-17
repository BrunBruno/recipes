import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const knedleCzeskieZGulaszem: Recipe = {
  name: "Knedliczki z Gulaszem",
  type: "dinner",
  country: "CZE",
  images: [""],
  time: 50,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.steamed_dumplings, amount: 8, unit: "szt" },
        { ing: iMET.pork_shoulder, amount: 500 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iHRB.bay_leaf, amount: 2, unit: "szt" },
        { ing: iSPC.allspice, amount: 3, unit: "ziar" },
        { ing: iOTH.sugar, amount: 1, unit: "lzi" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iLIQ.water, amount: 0.5, unit: "l" },
        { ing: iSPC.goulash_seasoning },
        { ing: iHRB.parsley },
      ],
    },
  ],

  steps: [
    {
      title: "Gulasz",
      steps: [
        "Mięso pokrój w grubą, około 2 cm kostkę.",
        "Cebulę pokrój w plastry, a czosnek drobno posiekaj.",
        "Rozgrzej olej w garnku i podsmaż mięso, aż zacznie się rumienić.",
        "Dodaj cebulę oraz czosnek i smaż jeszcze przez kilka minut.",
        "Wlej około 500 ml wody.",
        "Dodaj liście laurowe, ziele angielskie oraz przyprawę do gulaszu.",
        "Przykryj garnek częściowo pokrywką i duś około 30 minut, aż mięso będzie miękkie, a sos zgęstnieje.",
        "Pod koniec dodaj posiekaną natkę pietruszki oraz cukier i wymieszaj.",
      ],
    },
    {
      title: "Knedliczki",
      steps: [
        "Gotowe kluski na parze przygotuj zgodnie z instrukcją na opakowaniu.",
        "Gotowe kluski pokrój na grubsze plastry.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Na talerzu ułóż plastry klusek na parze.",
        "Polej je porcją gorącego gulaszu wraz z sosem.",
        "Posyp świeżą natką pietruszki.",
      ],
    },
  ],

  keyWords: ["wieprzowina"],
};

export default knedleCzeskieZGulaszem;
