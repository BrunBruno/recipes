import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kotletSchabowy: Recipe = {
  name: "Kotlety Schabowe",
  type: "dinner",
  images: ["kotlet-schabowy.jpg", "kotlet-schabowy-2.jpg"],
  time: 50,
  portions: 5,
  ingredients: [
    {
      title: "Kotlety Schabowe",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plaster" },
        { ingredient: iMET.egg, amount: 2 , unit: "szt"},
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iGRN.breadcrumbs, amount: 150 },
        { ingredient: iFAT.oil, amount: 10, unit: "łyżka" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.thyme },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.dill },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "5 × 150" },
        { ingredient: iVEG.cucumber, amount: 2.5, unit: "szt" },
        { ingredient: iVEG.onion, amount: 1.25, unit: "szt" },
        { ingredient: iDIR.cream, amount: 10, unit: "łyżka" },
      ],
      excludeFromCalc: true,
    },
  ],
  steps: [
    {
      title: "Kotlety Schabowe",
      steps: [
        "Rozbij plastry schabu na cienkie kotlety.",
        "Przypraw każdy kotlet wybranymi przyprawami.",
        "Obtocz każdy kotlet w mące, następnie w rozbełtanym jajku, a na końcu w bułce tartej.",
        "Na patelni rozgrzej olej na średnim ogniu.",
        "Smaż kotlety z obu stron na złoty kolor, aż będą dobrze usmażone.",
        "Odsącz z nadmiaru tłuszczu na papierowym ręczniku i podawaj od razu.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj w osolonej wodzie.",
        "Po ugotowaniu posyp pieprzem, solą i koperkiem.",
        "Pokrój ogórka w cienkie plasterki.",
        "Posiekaj cebulę i dodaj do ogórka.",
        "Dodaj śmietanę 22%, sól, pieprz i koperek, wymieszaj.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "schab", "smażone", "panierowane", "xxx"],
};

export default kotletSchabowy;
