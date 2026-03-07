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
      title: "",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plaster" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iGRN.flour, amount: 3, unit: "łyżka" },
        { ingredient: iGRN.breadcrumbs, amount: 150 },
        { ingredient: iFAT.oil, amount: 10, unit: "łyżka" },
        { ingredient: iSPC.thyme },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "5 × 200" },
        { ingredient: iDIR.cream_18, amount: 10, unit: "łyżka" },
        { ingredient: iVEG.cucumber, amount: 2.5, unit: "szt" },
        { ingredient: iVEG.onion, amount: 1.25, unit: "szt" },
        { ingredient: iVEG.spring_onion },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
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
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Pokrój ogórka w cienkie plasterki i dodaj posiekaną cebulę.",
        "Dodaj śmietanę, koperek, sól i pieprz, a następnie wymieszaj.",
        "Podawaj danie z porcją ziemniaków i przygotowaną mizerią.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "xxx"],
};

export default kotletSchabowy;
