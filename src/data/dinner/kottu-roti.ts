import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kottuRoti: Recipe = {
  name: "Kottu Roti",
  description:
    "Klasyczne lankijskie danie uliczne z porwanymi plackami roti, smażonymi z warzywami, jajkami oraz aromatycznymi przyprawami curry.",
  type: "dinner",
  images: ["kottu-roti.jpg"],
  time: 70,
  portions: 3,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "Placki Roti",
      items: [
        { ing: iGRN.flour, amount: 2, unit: "szk" },
        { ing: iOTH.warm_water, amount: 0.75, unit: "szk" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.salt, amount: 0.5, unit: "lzi" },
      ],
    },
    {
      title: "Mięso i marynata",
      items: [
        {
          type: "choice",
          options: [
            { ing: iMET.chicken_breast, amount: 350 },
            { ing: iMET.chicken_thigh, amount: 350 },
            { ing: iMET.ground_beef, amount: 350 },
            { ing: iMET.mutton, amount: 350 },
            { ing: iDIR.tofu, amount: 350 },
          ],
          selected: 0,
        },
        { ing: iJAR.lemon_juice, amount: 2, unit: "lzi" },
        { ing: iSPC.cumin, amount: 1, unit: "lzi" },
        { ing: iSPC.curry, amount: 1, unit: "lzi" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
      ],
    },
    {
      title: "Warzywa i dodatki",
      items: [
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.bell_pepper, amount: 0.5, unit: "szt" },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iVEG.cabbage, amount: 0.5, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iVEG.ginger, amount: 20 },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iVEG.spring_onion },
        { ing: iVEG.lemongrass },
        { ing: iVEG.fresh_coriander },
      ],
    },
    {
      title: "Przyprawy i sosy",
      items: [
        { ing: iOTH.soy_sauce, amount: 30, unit: "ml" },
        { ing: iVEG.chili_pepper, amount: 1, unit: "szt" },
        { ing: iSPC.garam_masala, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Roti",
      steps: [
        "Połącz mąkę, sól, ciepłą wodę i olej.",
        "Wyrób elastyczne ciasto i odstaw na 30 minut.",
        "Podziel ciasto na 6 równych części i rozwałkuj bardzo cienkie placki.",
        "Smaż placki na suchej, dobrze rozgrzanej patelni po 1-2 minuty z każdej strony, aż lekko się zarumienią.",
        "Ostudź placki, a następnie pokrój je w paski o szerokości ok. 1 cm i dalej w krótkie kawałki (ok. 3 cm).",
      ],
    },
    {
      title: "Mięso",
      steps: [
        "Pokrój mięso w drobną kostkę.",
        "Wymieszaj mięso z przyprawami (curry, kumin, papryka, sól, pieprz) oraz sokiem z cytryny.",
        "Odstaw na minimum 30 minut do marynowania.",
      ],
    },
    {
      title: "Smażenie bazy",
      steps: [
        "Rozgrzej dużą, ciężką patelnię lub wok i dodaj olej.",
        "Smaż zamarynowane mięso na dużym ogniu, aż nabierze złotobrązowego koloru.",
        "Dodaj cebulę, czosnek i imbir, smaż aż zmiękną, ale nie zbrązowieją.",
      ],
    },
    {
      title: "Warzywa i jajka",
      steps: [
        "Dodaj paprykę, marchew i kapustę, smaż na dużym ogniu, często mieszając, aby warzywa pozostały chrupkie.",
        "Dopraw solą, pieprzem, curry oraz chili.",
        "Zrób miejsce na środku patelni, wbij jajka i szybko je wymieszaj, aż się zetną.",
      ],
    },
    {
      title: "Łączenie Kottu",
      steps: [
        "Dodaj pokrojone roti oraz sos sojowy i garam masalę.",
        "Dokładnie, szybko i równomiernie mieszaj, aby roti połączyło się z resztą składników.",
        "Smaż jeszcze 2-3 minuty, aż całość będzie gorąca i dobrze wymieszana.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Zdejmij z ognia i od razu podawaj na gorąco.",
        "Opcjonalnie posyp świeżą kolendrą.",
      ],
    },
  ],
  keyWords: [],
};

export default kottuRoti;
